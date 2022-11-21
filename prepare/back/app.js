const express = require("express");
const cors = require("cors");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");

const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch(console.error);

app.use(express.json()); // front에서 json 형태로 보냈을 때 json 형태의 데이터를 req.body 안에 넣어줌
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello Grape");
});

app.use(
  cors({
    origin: true,
    credentials: false,
  })
);
app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행 중");
});
