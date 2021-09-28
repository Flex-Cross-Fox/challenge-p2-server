'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movie', [
      {title: 'batman', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '1',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'iron man', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '2', authorId: '1',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'iron man 2', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '4', authorId: '1',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'iron man 3', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '4', authorId: '2',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'spiderman', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '2', authorId: '2',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'spiderman 2', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '2',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'spiderman 3', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '3',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'amazing spider man', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '3',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'amazing spider man 2', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '3',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'spider far from home', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '3', authorId: '4',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'spider no home', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '5', authorId: '4',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'spider home', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '3', authorId: '4',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'joker', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '5',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'superman', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '3', authorId: '5',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'thor', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '5',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'thor 2', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '3', authorId: '6',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'Final fantasy 7', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '2', authorId: '6',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: 'final fantasy xv', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '6',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: '7', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '2', authorId: '2',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: '3:30', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '2', authorId: '2',status: 'active',createdAt: new Date, updatedAt: new Date},
      {title: '23:59', synopsis: 'test content uji percobaan', trailerUrl: 'youtube', imgUrl: 'google', rating: '7', genreId: '1', authorId: '2',status: 'active',createdAt: new Date, updatedAt: new Date}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movie', null, {})
  }
};
