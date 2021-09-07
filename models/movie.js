'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Genre, {foreignKey: 'genreId'})
      Movie.belongsTo(models.User, {foreignKey: 'authorId'})
      Movie.hasMany(models.History, { foreignKey: 'entityId'})
    }
  };
  Movie.init({
    title: {type: DataTypes.STRING,
      validate: {
        notEmpty: true
        // allowNull: false
      }},
    synopsis: {type: DataTypes.TEXT,
      validate: {
        notEmpty: true
        // allowNull: false
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