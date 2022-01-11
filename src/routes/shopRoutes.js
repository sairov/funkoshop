const express = require('express');
const router = express.Router();
const shopController = require('../controller/shopController');

router.get('/detail/:id', shopController.detail);

 

module.exports = router;