const express = require('express');
const router = express.Router();
const blog_controllers = require('../controllers/blogControllers')

router.get('/', blog_controllers.blog_index)


// blog routes
router.get('/create', blog_controllers.blog_create_get);
router.post('/', blog_controllers.blog_create_post)
router.get('/:id', blog_controllers.blog_details);
router.delete('/:id', blog_controllers.blog_delete);

module.exports = router;