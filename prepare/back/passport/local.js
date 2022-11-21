const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          }); // 이메일 있는지 검사
          if (!user) {
            // 이메일 없으면
            return done(null, false, { reason: "존재하지 않는 사용자입니다." });
          }
          const result = bcrypt.compare(password, user.password); // 이메일 존재하면 비밀번호 검사
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
