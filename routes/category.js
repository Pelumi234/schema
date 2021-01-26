var express = require('express');
var router = express.Router();

// Require user controller.
var categoryController = require('../controllers/categoryController');


router.get('/', categoryController.category_get);
// router.post('/category', categoryController.category_post);
// router.update('/category', categoryController.category_update);
// router.delete('/category', categoryController.category_delete);


module.exports = router;

