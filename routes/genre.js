const router = require('express').Router();
const controller = require('../controller/genre');

router.get('/', controller.basicPage);
router.get('/:id', controller.aGenre);
router.post('/', controller.addGenre);
router.delete('/:id', controller.delete);
router.put('/:id', controller.updateRow);

module.exports = router;