const router = require('express').Router();
const controller = require('../controller/movie');

router.get('/', controller.allMovie);

router.get('/:id', controller.aMovie);

router.post('/', controller.addMovie);

router.delete('/:id', controller.delete);

router.put('/:id', controller.updateRow);

module.exports = router;