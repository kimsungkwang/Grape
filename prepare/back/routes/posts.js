const express = require("express");
const { Op } = require("sequelize");

const { Post, Image, User, Comment } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  // GET /posts
  try {
    const posts = await Post.findAll({
      limit: 10,
      order: [
        ["createdAt", "DESC"],  // 생성일로 내림차순
        [Comment, "createdAt", "DESC"],  // 2차적으로 그안에 들어있는 댓글들의 생성일을 내림차순으로 정렬
      ],
      include: [{
        model: User,  // 게시글 작성자 
        attributes: ["id", "nickname"], // 비밀번호 뺴고 가져오기
      }, {
        model: Image,
      },{
        model: Comment, // 댓글 작성자
        include: [{
          model: User,
          attributes: ["id", "nickname"],   // 비밀번호 뺴고 가져오기
        }]
      }, {
        model: User, 
        as: "Likers",
        attributes: ["id"],
      }],
    });
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
