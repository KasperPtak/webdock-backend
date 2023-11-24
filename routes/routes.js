















// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/UserController.js');

const router = express.Router();

// router.get('/users', (req, res) => {
//     res.send("ajajaj Fuck it")
// });
router.get('/users', UserController.getUserWithRole);

// router.get('/users', (req, res) => {
//     res.send('Hellow Kenneth')
// })

module.exports = router;