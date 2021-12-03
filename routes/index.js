const router = require('express').Router();

const movie = require('./movie');
const user = require('./user');
const genre = require('./genre');
const favorite = require('./favorite')

router.use('/favorite', favorite)
router.use('/movies', movie);
router.use('/genres', genre);
router.use('/', user);

module.exports = router;