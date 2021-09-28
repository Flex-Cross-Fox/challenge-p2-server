'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bookmark', [
      {noUser: '1', noMovie: '1',createdAt: new Date, updatedAt: new Date},
      {noUser: '2', noMovie: '2',createdAt: new Date, updatedAt: new Date},
      {noUser: '3', noMovie: '3',createdAt: new Date, updatedAt: new Date},
      {noUser: '4', noMovie: '4',createdAt: new Date, updatedAt: new Date},
      {noUser: '5', noMovie: '5',createdAt: new Date, updatedAt: new Date},
      {noUser: '1', noMovie: '6',createdAt: new Date, updatedAt: new Date},
      {noUser: '2', noMovie: '7',createdAt: new Date, updatedAt: new Date},
      {noUser: '3', noMovie: '8',createdAt: new Date, updatedAt: new Date},
      {noUser: '4', noMovie: '9',createdAt: new Date, updatedAt: new Date},
      {noUser: '5', noMovie: '10',createdAt: new Date, updatedAt: new Date},
      {noUser: '1', noMovie: '11',createdAt: new Date, updatedAt: new Date},
      {noUser: '2', noMovie: '12',createdAt: new Date, updatedAt: new Date},
      {noUser: '3', noMovie: '13',createdAt: new Date, updatedAt: new Date},
      {noUser: '4', noMovie: '14',createdAt: new Date, updatedAt: new Date},
      {noUser: '5', noMovie: '15',createdAt: new Date, updatedAt: new Date},
      {noUser: '1', noMovie: '16',createdAt: new Date, updatedAt: new Date},
      {noUser: '2', noMovie: '17',createdAt: new Date, updatedAt: new Date},
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bookmark', null, {})
  }
};
