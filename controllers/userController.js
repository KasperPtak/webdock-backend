// controllers/userController.js
const db = require('../models'); // Import your Sequelize instance

const getUserWithRole = (req, res) => {
  db.User.findAll({
    include: db.Role,
  }).then((users) => {
    // Your response handling logic here
    res.json(users);
  });
};

module.exports = {
  getUserWithRole,
};
