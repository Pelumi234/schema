var express = require('express');
var router = express.Router();

// Require user controller.
var product_categoriesController = require('../controllers/product_categoriesController');


// when users visit /user go to user controller
router.get('/product_categories', product_categoriesController.product_categories_get);
// router.post('/users', usersController.users_post);
// router.update('/users', usersController.users_update);
// router.delete('/users', usersController.users_delete);


module.exports = router;

