// controllers/userController.js
const db = require("../models"); // Import your Sequelize instance
const category = require("../models/category");

const getPostsWithStatus = (req, res) => {
  db.Post.findAll({
    include: [
      {
        model: db.Status,
        attributes: ["id", "status"],
      },
      {
        model: db.Category,
        attributes: ["id", "category"],
      },
    ],
  })
    .then((posts) => {
      // Your response handling logic here
      res.json(posts);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

// REMOVE
// What the fuck were we thinking, this is smarter - Tak niller :*//
const getAllPostsByStatus = (req, res) => {
  const postStatus = req.params.postStatus;
  db.Post.findAll({
    where: { /* your conditions here */ },
    include: [
      {
        model: db.Status,
        where: { status: postStatus },
      },
      {
        model: db.Comment,
        separate: true,
        include: [
          {
            model: db.Reply,
            separate: true,
          },
        ]
      },
    ],
  })
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const post = (req, res) => {
  const postId = req.params.id;

  db.Post.findByPk(postId, {
    where: { postId: postId }, 
    include: [
      {
        model: db.Comment,
        separate: true,
        include: [
          {
            model: db.Reply,
            separate: true,
          },
        ],
      },
    ],
  })
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const postIsUpvotedBy = (req, res) => {
  const postId = req.params.id;

  db.PostHasUpvote.findAll({
    where: {
      post_id: postId
    },
    include: [
      {
        model: db.User,
        attributes: ['username', 'profile_picture']
      }
    ]
  })
    .then((upvotes) => {
      // Extract usernames and profile pictures from the upvotes
      const userInformation = upvotes.map((upvote) => ({
        username: upvote.User.username,
        profile_picture: upvote.User.profile_picture
      }));
      
      res.json(userInformation);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getPostsWithStatus,
  getAllPostsByStatus,
  postIsUpvotedBy,
  post
};
