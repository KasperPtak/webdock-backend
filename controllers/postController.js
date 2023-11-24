// controllers/userController.js
const db = require('../models'); // Import your Sequelize instance
const category = require('../models/category');

const getPostsWithStatus = (req, res) => {
  db.Post.findAll({
    include: [
      {
        model: db.Status,
        attributes: ['id', 'status']
      },
      {
        model: db.Category,
        attributes: ['id', 'category']
      }
    ]
  }).then((posts) => {
    // Your response handling logic here
    res.json(posts);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};



const getReviewPosts = (req, res) => {
  db.Post.findAll({
    include: [{
      model: db.Status,
      where: { status: 'Review' },
      attributes: ['id', 'status']
    }],
  }).then((posts) => {
    // Your response handling logic here
    res.json(posts);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};

const getPlannedPosts = (req, res) => {
  db.Post.findAll({
    include: [{
      model: db.Status,
      where: { status: 'Planned' }
    }],
  }).then((posts) => {
    // Your response handling logic here
    res.json(posts);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};

const getInProgressPosts = (req, res) => {
  db.Post.findAll({
    include: [{
      model: db.Status,
      where: { status: 'In Progress' }
    }],
  }).then((posts) => {
    // Your response handling logic here
    res.json(posts);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};

const getCompletedPosts = (req, res) => {
  db.Post.findAll({
    include: [{
      model: db.Status,
      where: { status: 'Complete' }
    }],
  }).then((posts) => {
    // Your response handling logic here
    res.json(posts);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};


const getPostWithComments = (req, res) => {
  db.Post.findAll({
    include: [{
      model: db.PostHasComments,
    }],
  }).then((posts) => {
    // Your response handling logic here
    res.json(posts);
  }).catch((error) => {
    console.error(error);
    res.sendStatus(500);
  });
};


module.exports = {
  getPostsWithStatus,
  getReviewPosts,
  getPlannedPosts,
  getInProgressPosts,
  getCompletedPosts,
  getPostWithComments
};
