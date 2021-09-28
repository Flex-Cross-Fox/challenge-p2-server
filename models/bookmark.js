'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookmark.belongsTo( models.User, {foreignKey: "noUser"})
      bookmark.belongsTo( models.Movie, {foreignKey: "noMovie"})
    }
  };
  bookmark.init({
    noUser: DataTypes.INTEGER,
    noMovie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bookmark',
  });
  return bookmark;
};