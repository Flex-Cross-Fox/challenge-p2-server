'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genre', [
      {name: 'uji coba', createdAt: new Date, updatedAt: new Date}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genre', null, {})
  }
};
