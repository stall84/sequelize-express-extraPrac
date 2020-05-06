'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    postBody: DataTypes.TEXT
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
    Posts.belongsTo(models.user)
  };
  return Posts;
};