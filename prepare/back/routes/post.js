const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Post, Image, Comment, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성함");
  fs.mkdirSync("uploads");
}

router.post("/", isLoggedIn, async (req, res, next) => {
  // POST   /post
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id, // 게시물 누가 썼는지
    });
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, // 좋아요 누른 유저
          as: "Likers",
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(fullPost);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      // 파일이름.png
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname); // 파일이름
      done(null, basename + new Date().getTime() + ext); // 파일이름1234555.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, //   20MB
});
// 이미지 업로드
router.post("/images", isLoggedIn, upload.array("image"), (req, res, next) => {
  // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
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

router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
  // PATCH    /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id }); // 프론트 정보
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId/like", isLoggedIn, async (req, res, next) => {
  // DELETE   /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다.");
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id }); // 프론트 정보
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res) => {
  // DELETE   /post
  try {
    await Post.destroy({
      where: {
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
