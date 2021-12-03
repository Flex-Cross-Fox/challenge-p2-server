'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      Genre.hasMany(models.Movie, {foreignKey: 'genreId'})
    }
  };
  Genre.init({
    name: {type: DataTypes.STRING,
      validate: {
        notEmpty: true
        // allowNull: false
      }}
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};