const router = require('express').Router();
const controller = require('../controller/user');

// router.get('/', controller.allUser);

router.post('/register', controller.addUser);

// router.get('/:id', controller.aUser);

// router.delete('/:id', controller.delete);

// router.put('/:id', controller.updateRow);

router.post('/login', controller.login);

module.exports = router;