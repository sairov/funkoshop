const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

router.get('/', adminController.index);
router.get('/create', adminController.create);
router.post('/create', adminController.store);
router.get('/edit/:id', adminController.edit);
// router.delete('/delete/:id', adminController.delete);
 

module.exports = router;