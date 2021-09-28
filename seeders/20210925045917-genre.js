'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genre', [
      {name: 'fauzan', createdAt: new Date, updatedAt: new Date},
      {name: 'ardi', createdAt: new Date, updatedAt: new Date},
      {name: 'vicky', createdAt: new Date, updatedAt: new Date},
      {name: 'patra', createdAt: new Date, updatedAt: new Date},
      {name: 'ricky', createdAt: new Date, updatedAt: new Date},
      {name: 'bagus', createdAt: new Date, updatedAt: new Date}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genre', null, {})
  }
};
