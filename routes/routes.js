// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/usersWithRoles', userController.getUserWithRole);

module.exports = router;
