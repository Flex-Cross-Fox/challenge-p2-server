'use strict';
const { hash } = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Movie, {foreignKey: 'authorId'})
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: {type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }},
    password: {type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [5,99]}},
    role: {type: DataTypes.STRING,
      validate: {
        isIn: [['admin','staff']]
        // roleCheck(value){
        //   if(value != 'admin' && value != 'staff'){
        //     throw new Error('hanya bisa pilih admin atau staff saja')
        //   }
        // }
      }},
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hash(user.password)
      }
    }
  });
  return User;
};