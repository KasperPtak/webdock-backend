// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/userController.js');
const PostController = require('../controllers/postController.js')
const CategoryController = require('../controllers/categoryController.js')

const router = express.Router();

router.get('/users', UserController.getUserWithRole);

router.get('/postsWithStatus', PostController.getPostsWithStatus);

router.get('/reviewPosts', PostController.getReviewPosts);
router.get('/plannedPosts', PostController.getPlannedPosts);
router.get('/inProgressPosts', PostController.getInProgressPosts);
router.get('/completedPosts/:postStatus', PostController.getCompletedPosts);
router.get('/getAllPostsByStatus/:postStatus', PostController.getAllPostsByStatus);

router.get('/getCategories', CategoryController.getCategories);

router.get('/getSinglePostFromComment/:postId', PostController.getSinglePost); // composite router her senere


module.exports = router;