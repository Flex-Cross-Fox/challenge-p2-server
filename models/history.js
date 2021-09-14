'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      History.belongsTo( models.Movie, {foreignKey: 'entityId'} )
      History.belongsTo( models.User, {foreignKey: 'updatedBy'} )
    }
  };
  History.init({
    entityId: DataTypes.NUMBER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};