const router = require('express').Router();

const movie = require('./movie');
const user = require('./user');
const genre = require('./genre');

router.use('/movies', movie);
router.use('/users', user);
router.use('/genres', genre);

module.exports = router;