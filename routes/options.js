var express = require('express');
var router = express.Router();

// Require user controller.
var optionsController = require('../controllers/optionsController');


// when users visit /user go to user controller
router.get('/options', optionsController.options_get);
// router.post('/users', usersController.users_post);
// router.update('/users', usersController.users_update);
// router.delete('/users', usersController.users_delete);


module.exports = router;

