const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User, Post } = require("../models");
const { isNotLoggedIn, isLoggedIn } = require("./middlewares");
const router = express.Router();

// 로그인 (로그인 안한사람만 가능 isNotLoggedIn)
// 미들웨어 확장
router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
          },
          {
            model: User,
            as: "Followings",
          },
          {
            model: User,
            as: "Followers",
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword); // 사용자 정보 프론트로 넘겨주기
    });
  })(req, res, next);
});

// 회원가입 (로그인 안한사람만 가능 isNotLoggedIn)
router.post("/", isNotLoggedIn, async (req, res, next) => {
  // POST /user/
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

// 로그아웃 (로그인 한사람만 isLoggedIn)
router.post("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {
    res.redirect("/");
    // passport@0.6
    //==> 로그인 할 때 마다 세션 쿠키가 변경되고 로그아웃 할 때도 세션 쿠키가 정리 되는 듯
    //==> 콜백 함수 제공하고 그 안에서 응답
  });
  req.session.destroy(); // 세션 지우기
  res.send("ok");
});

module.exports = router;
