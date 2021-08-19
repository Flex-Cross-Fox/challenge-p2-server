const router = require('express').Router();
const controller = require('../controller/user');

router.get('/', controller.allUser);

router.post('/', controller.addUser);

router.get('/:id', controller.aUser);

router.delete('/:id', controller.delete);

router.put('/:id', controller.updateRow);

module.exports = router;