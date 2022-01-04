const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.index);
router.get('/producto/:id', mainController.product);
router.get('/404', mainController.fallback);



module.exports = router;