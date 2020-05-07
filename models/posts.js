'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    postBody: DataTypes.TEXT
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
    Posts.hasOne(models.User);
  };
  return Posts;
};