var express = require('express');
var router = express.Router();

// Require user controller.
var orders_detailsController = require('../controllers/orders_detailsController');


// when users visit /user go to user controller
router.get('/orders_details', orders_detailsController.orders_details_get);
// router.post('/users', usersController.users_post);
// router.update('/users', usersController.users_update);
// router.delete('/users', usersController.users_delete);


module.exports = router;

