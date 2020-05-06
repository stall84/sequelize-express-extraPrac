'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    postCount: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Posts)
  };
  return User;
};