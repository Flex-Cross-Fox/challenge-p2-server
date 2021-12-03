const router = require('express').Router();
const controller = require('../controller/user');

router.post('/register', controller.addUser);
router.post('/login', controller.login);
router.post('/google-login', controller.googleLogin);

module.exports = router;