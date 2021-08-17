const router = require('express').Router();

const movie = require('./movie');
const user = require('./user');

router.use('/movie', movie);
router.use('/user', user);

module.exports = router;