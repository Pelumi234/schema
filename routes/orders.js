var express = require('express');
var router = express.Router();

// Require user controller.
var ordersController = require('../controllers/ordersController');


// when users visit /user go to user controller
router.get('/orders', ordersController.orders_get);
// router.post('/users', usersController.users_post);
// router.update('/users', usersController.users_update);
// router.delete('/users', usersController.users_delete);


module.exports = router;

