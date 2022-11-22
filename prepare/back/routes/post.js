const express = require("express");

const { Post } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

router.post("/", isLoggedIn, async (req, res, next) => {
  // POST   /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.body.id, // 게시물을 누가 썼는지
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 파라미터 : 주소 부분에서 동적으로 변하는 부분 -> :post.id
router.post("/:post.id/comment", isLoggedIn, async (req, res, next) => {
  // POST   /post/comment
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다.");
    }
    
    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.params.postId,
      UserId: req.body.id,
    });
    res.status(201).json(comment);
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
