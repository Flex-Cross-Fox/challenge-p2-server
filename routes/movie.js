const router = require('express').Router();
const controller = require('../controller/movie');
const { authenticate, authorizeAdmin } = require('../middleware/authenticate&authorize');

router.use('/', authenticate)

router.get('/', controller.allMovie);

router.get('/:id', controller.aMovie);

router.post('/', controller.addMovie);

router.use('/:id', authorizeAdmin)

router.delete('/:id', controller.delete);

router.put('/:id', controller.updateRow);

module.exports = router;