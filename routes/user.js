const router = require('express').Router();
const controller = require('../controller/user');

router.get('/', controller.allUser);

module.exports = router;