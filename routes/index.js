const router = require('express').Router();

const history = require('./history')
const movie = require('./movie');
const user = require('./user');
const genre = require('./genre');

router.use('/history', history);
router.use('/movies', movie);
router.use('/genres', genre);
router.use('/', user);

module.exports = router;