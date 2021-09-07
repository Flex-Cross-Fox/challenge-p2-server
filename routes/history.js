const router = require('express').Router();
const controller = require('../controller/history');

router.post('/', controller.postHistory);

router.delete('/', controller.deleteHistory);

router.put('/', controller.putHistory);

router.patch('/', controller.patchHistory);

module.exports = router;