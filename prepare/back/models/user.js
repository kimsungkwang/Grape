module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      User,
      {
        // id 는 기본적으로 들어가 있다.
        email: {

        },
        nickname: {

        },
        password: {

        },
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci", // 이모티콘 저장
      }
    );
    User.associate = (db) => {};
    return User;
  };
  