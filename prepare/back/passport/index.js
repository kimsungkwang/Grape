const passport = require("passport");
const local = require("./local");
const { User, Post } = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ 
        where: { id },
        include: [{ model: Post}]
       });
      done(null, user); // req.user 에 넣어줌
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};
