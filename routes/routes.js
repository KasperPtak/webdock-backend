// routes/userRoutes.js
const express = require('express');
const multer = require('multer');
const UserController = require('../controllers/userController.js');
const PostController = require('../controllers/postController.js')
const CategoryController = require('../controllers/categoryController.js')
const VerifyController = require ('../controllers/verifyController.js')

const router = express.Router();

// Multer to recieve, and handle files. Later we should add a new table for files and let multer and createpostcontroller handle creating the relation and post+files
const upload = multer();

router.get('/users', UserController.getUserWithRole);

router.get('/postsWithStatus', PostController.getPostsWithStatus);
router.get('/getAllPostsByStatus/:postStatus', PostController.getAllPostsByStatus);
router.get('/post/:id', PostController.post); // composite router her senere
router.get('/merged-post/:id', PostController.mergedPost); // composite router her senere
router.get('/postUpvotes/:id', PostController.postIsUpvotedBy); // composite router her senere

router.post('/createpost', upload.array('file'), PostController.createNewPost);

router.get('/getCategories', CategoryController.getCategories);
router.post('/handlelogin', VerifyController.verifyUser);

module.exports = router;

