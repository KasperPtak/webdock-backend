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
      {
        model: db.Comment,
        attributes: ["content"]
      }
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
        attributes: ['status']
      },
      {
        model: db.Comment,
        separate: true,
      },
      {
        model: db.Category,
        attributes: ['category']
      }
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
        attributes: ['username', 'profile_picture', 'email']
      }
    ]
  })
    .then((upvotes) => {
      // Extract usernames and profile pictures from the upvotes
      const userInformation = upvotes.map((upvote) => ({
        username: upvote.User.username,
        profile_picture: upvote.User.profile_picture,
        email: upvote.User.email
      }));

      res.json(userInformation);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const mergedPost = (req, res) => {
  const postId = req.params.id;

  db.MergedPost.findAll({
    where: {
      master_post: postId
    },
    include: [
      {
        model: db.Post,
        attributes: ["Title"]
      },
    ],
  })
    .then((posts) => {
      const postContents = posts.map(post => post.Post);

      res.json(postContents);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  getPostsWithStatus,
  getAllPostsByStatus,
  postIsUpvotedBy,
  post,
  mergedPost
};
