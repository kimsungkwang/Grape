const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 이메일 입니다.");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 비밀번호 hash화

    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    // res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(201).send("ok");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
