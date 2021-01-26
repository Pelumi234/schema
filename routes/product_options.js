var express = require('express');
var router = express.Router();

// Require user controller.
var product_optionsController = require('../controllers/product_optionsController');


// when users visit /user go to user controller
router.get('/product_options', product_optionsController.product_options_get);
// router.post('/users', usersController.users_post);
// router.update('/users', usersController.users_update);
// router.delete('/users', usersController.users_delete);


module.exports = router;

