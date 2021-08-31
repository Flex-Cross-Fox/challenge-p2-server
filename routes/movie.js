const router = require('express').Router();
const controller = require('../controller/movie');
const { authenticate, authorizeAdmin } = require('../middleware/authenticate&authorize');

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage})

const imageKit = require('../helpers/imagekit');

router.use('/', authenticate)

router.get('/', controller.allMovie);

router.get('/:id', controller.aMovie);

router.post('/', upload.single('fileInput'), imageKit ,controller.addMovie);

router.use('/:id', authorizeAdmin)

router.delete('/:id', controller.delete);

router.put('/:id', upload.single('fileInput'), imageKit,controller.updateRow);

module.exports = router;