var express = require('express');
var router = express.Router();

// Require user controller.
var categoriesController = require('../controllers/categoriesController');


// when users visit /user go to user controller
router.get('/categories', categoriesController.categories_get);
// router.post('/users', usersController.users_post);
// router.update('/users', usersController.users_update);
// router.delete('/users', usersController.users_delete);


module.exports = router;

