module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define(
      Image,
      {
        // id 는 기본적으로 들어가 있다.
        src: {},
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci", // 이모티콘 저장
      }
    );
    Image.associate = (db) => {};
    return Image;
  };
  