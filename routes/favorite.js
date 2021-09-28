const router = require('express').Router();
const controller = require('../controller/favorite');
const { authenticate } = require('../middleware/authenticate&authorize');

router.use('/', authenticate)
router.get('/', controller.getBookmark);
router.post('/:id', controller.addMovie);
router.delete('/:id', controller.delete);

module.exports = router;