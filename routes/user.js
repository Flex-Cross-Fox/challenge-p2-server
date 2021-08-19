const router = require('express').Router();
const controller = require('../controller/user');

router.get('/', controller.allUser);

router.post('/', controller.addUser);

module.exports = router;