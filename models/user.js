'use strict';
const { hash } = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.bookmark, {foreignKey: 'noUser'})
      User.hasMany(models.Movie, {foreignKey: 'authorId'})
      User.hasMany(models.History, {foreignKey: 'updatedBy'})
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      },
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [5,99]
      },
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['admin','staff']]
      }},
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hash(user.password)
      },
      beforeUpdate:(user, options) => {
        user.password = hash(user.password)
      }
    }
  });
  return User;
};