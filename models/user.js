'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    postCount: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.posts)
  };
  return User;
};