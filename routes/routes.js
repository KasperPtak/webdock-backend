// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/userController.js');
const PostController = require('../controllers/postController.js')
const CategoryController = require('../controllers/categoryController.js')

const router = express.Router();

// router.get('/users', (req, res) => {
//     res.send("ajajaj Fuck it")
// });
router.get('/users', UserController.getUserWithRole);

router.get('/postsWithStatus', PostController.getPostsWithStatus);

router.get('/reviewPosts', PostController.getReviewPosts);
router.get('/plannedPosts', PostController.getPlannedPosts);
router.get('/inProgressPosts', PostController.getInProgressPosts);
router.get('/completedPosts', PostController.getCompletedPosts);

router.get('/getCategories', CategoryController.getCategories);

// router.get('/users', (req, res) => {
//     res.send('Hellow Kenneth')
// })

module.exports = router;