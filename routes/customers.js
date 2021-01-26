var express = require('express');
var router = express.Router();

// Require user controller.
var customersController = require('../controllers/customersController');


// when users visit /user go to user controller
router.get('/customers', customersController.customers_get);
// router.post('/users', usersController.users_post);
// router.update('/users', usersController.users_update);
// router.delete('/users', usersController.users_delete);


module.exports = router;

