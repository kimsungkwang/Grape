const express = require("express");

const { Post, Image, Comment, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

router.post("/", isLoggedIn, async (req, res, next) => {
  // POST   /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id, // 게시물 누가 썼는지
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User, // 댓글 작성자
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname'],
      }]
    })
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 파라미터 : 주소 부분에서 동적으로 변하는 부분 -> :post.id
router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  // POST   /post/1/comment
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id, // 댓글 누가 썼는지   ===> 오류 req.body.id 로 했음 ㅋㅋ ;; 
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/", isLoggedIn, (req, res) => {
  // DELETE   /post
  res.json({ id: 1 });
});

module.exports = router;
