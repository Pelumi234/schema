var express = require('express');
var router = express.Router();

// Require user controller.
var employeeController = require('../controllers/employeeController');


// when users visit /user go to user controller
router.get('/', employeeController.employee_get);
// router.post('/employee', employeeController.employee_post);
// router.update('/employee', employeeController.employee_update);
// router.delete('/employee', employeeController.employee_delete);



module.exports = router;
