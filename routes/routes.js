// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/userController.js');
const PostController = require('../controllers/postController.js')
const CategoryController = require('../controllers/categoryController.js')

const router = express.Router();

router.get('/users', UserController.getUserWithRole);

router.get('/postsWithStatus', PostController.getPostsWithStatus);
router.get('/getAllPostsByStatus/:postStatus', PostController.getAllPostsByStatus);
router.get('/post/:id', PostController.post); // composite router her senere
router.get('/merged-post/:id', PostController.mergedPost); // composite router her senere
router.get('/postUpvotes/:id', PostController.postIsUpvotedBy); // composite router her senere

router.get('/getCategories', CategoryController.getCategories);

module.exports = router;