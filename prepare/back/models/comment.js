module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
      Comment,
      {
        // id 는 기본적으로 들어가 있다.
        Comment: {},
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 이모티콘 저장
      }
    );
    Comment.associate = (db) => {};
    return Comment;
  };
  