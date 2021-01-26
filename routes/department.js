var express = require('express');
var router = express.Router();

// Require user controller.
var departmentController = require('../controllers/departmentController');


// when users visit /user go to user controller
router.get('/', departmentController.department_get);
// router.post('/department', departmentController.department_post);
// router.update('/department', departmentController.department_update);
// router.delete('/department', departmentController.department_delete);


module.exports = router;

