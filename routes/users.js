var express = require('express');
var router = express.Router();

// Require user controller.
var usersController = require('../controllers/usersController');


// when users visit /user go to user controller
router.get('/users', usersController.users_get);
// router.post('/users', usersController.users_post);
// router.update('/users', usersController.users_update);
// router.delete('/users', usersController.users_delete);


module.exports = router;

