const router = require('express').Router();

const movie = require('./movie');
const user = require('./user');
const genre = require('./genre');

router.use('/movies', movie);
router.use('/genres', genre);
router.use('/', user);

module.exports = router;