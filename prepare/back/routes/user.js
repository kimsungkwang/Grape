const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User, Post } = require("../models");
const { isNotLoggedIn, isLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/", async (req, res, next) => {
  //  GET   /user
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

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
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
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

// 로그아웃 (로그인 한 사람만 isLoggedIn)
router.post("/logout", isLoggedIn, (req, res) => {
  req.logout(() => {});
  // passport@0.6
  //==> 로그인 할 때 마다 세션 쿠키가 변경되고 로그아웃 할 때도 세션 쿠키가 정리 되는 듯
  //==> 콜백 함수 제공하고 그 안에서 응답

  // TypeError: Cannot read properties of undefined (reading 'regenerate') 이 에러 때문에
  // == > passport@0.5 로 바꿈  ;;;;;;;;;;

  req.session.destroy(); // 세션 지우기
  res.send("ok");
});

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id }, // 자신의 아이디를 수정
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로우
router.patch("/:userId/follow", isLoggedIn, async (req, res, next) => {
  // PAHCH  user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("회원 정보가 없습니다.");
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 언팔
router.delete("/:userId/follow", isLoggedIn, async (req, res, next) => {
  // DELOETE  user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send("회원 정보가 없습니다.");
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로우 삭제
router.delete("/follower/:userId", isLoggedIn, async (req, res, next) => {
  // DELOETE  user/follower/2
  try {
    const user = await User.findOne({ where: { id: req.user.id } });  // 나를찾는다
    if (!user) {
      res.status(403).send("회원 정보가 없습니다.");
    }
    await user.removeFollowings(req.params.userId);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/followers", isLoggedIn, async (req, res, next) => {
  // GET  user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.user.id } });  // 나를 찾고 
    if (!user) {
      res.status(403).send("회원 정보가 없습니다.");
    }
    const followers = await user.getFollowers();  // 팔로워들 가져와라 
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/followings", isLoggedIn, async (req, res, next) => {
  // GET  user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.user.id } });  // 나를 찾고 
    if (!user) {
      res.status(403).send("회원 정보가 없습니다.");
    }
    const followings = await user.getFollowings();  // 팔로워들 가져와라 
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
