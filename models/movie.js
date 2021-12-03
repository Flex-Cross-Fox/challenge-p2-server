'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.hasMany(models.bookmark, {foreignKey: 'noMovie'})
      Movie.belongsTo(models.Genre, {foreignKey: 'genreId'})
      Movie.belongsTo(models.User, {foreignKey: 'authorId'})
      Movie.hasMany(models.History, { foreignKey: 'entityId'})
    }
  };
  Movie.init({
    title: {type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }},
    synopsis: {type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }},
    trailerUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    rating: {type: DataTypes.INTEGER,
      validate: {
        min: 1
      }},
    genreId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    status: {type: DataTypes.STRING,
      validate: {
        defaultValue(value){
          if(!value){
            value = 'active'
          }
        },
        isIn: [['active','inactive','archived']]
      }}
  }, {
    sequelize,
    modelName: 'Movie'
  });
  return Movie;
};