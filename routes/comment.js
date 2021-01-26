var express = require('express');
var router = express.Router();

// Require user controller.
var commentController = require('../controllers/commentController');


router.get('/', commentController.comment_get);
// router.post('/comment', commentController.comment_post);
// router.update('/comment', commentController.comment_update);
// router.delete('/comment', commentController.comment_delete);


module.exports = router;

