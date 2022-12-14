const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const hashtagRouter = require("./routes/hashtag");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch(console.error);

passportConfig();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
  app.use(
    cors({
      origin: "http://grapegrape.site",
      credentials: true, // 쿠키도 같이 전달
    })
  );
} else {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json()); // front에서 json 형태로 보냈을 때 json 형태의 데이터를 req.body 안에 넣어줌
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRE));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === "production" && ".grapegrape.site",
    },
  })
);
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // session 연결

app.get("/", (req, res) => {
  res.send("hello Grape");
});

app.use("/posts", postsRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagRouter);

app.listen(80, () => {
  console.log("서버 실행 중");
});
