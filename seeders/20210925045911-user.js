'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {username: 'albert', email: 'albert@gmail.com', password: '123456', role: 'admin', phoneNumber: '081234567', address: 'batam', createdAt: new Date, updatedAt: new Date},
      {username: 'aristo', email: 'aristo@gmail.com', password: '123456', role: 'admin', phoneNumber: '081234567', address: 'batam', createdAt: new Date, updatedAt: new Date},
      {username: 'kwok', email: 'kwok@gmail.com', password: '123456', role: 'admin', phoneNumber: '081234567', address: 'batam', createdAt: new Date, updatedAt: new Date},
      {username: 'guo', email: 'guo@gmail.com', password: '123456', role: 'admin', phoneNumber: '081234567', address: 'batam', createdAt: new Date, updatedAt: new Date}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {})
  }
};
