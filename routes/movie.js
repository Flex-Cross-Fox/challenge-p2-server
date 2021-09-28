const router = require('express').Router();
const controller = require('../controller/movie');
const { authenticate, authorizeAdmin, statusAdminOnly } = require('../middleware/authenticate&authorize');

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage})

const imageKit = require('../helpers/imagekit');
router.get('/pag/:id', controller.pagination)
router.get('/', controller.allMovie);
// router.use('/', authenticate)
router.get('/:id', controller.aMovie);
router.post('/', controller.addMovie);
// router.post('/', upload.single('fileInput'), imageKit ,controller.addMovie);
router.use('/:id', authorizeAdmin)
router.delete('/:id', controller.delete);
router.patch('/:id', statusAdminOnly, controller.patch);
router.put('/:id', upload.single('fileInput'), imageKit,controller.updateRow);

module.exports = router;