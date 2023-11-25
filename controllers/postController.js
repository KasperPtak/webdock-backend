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

const getReviewPosts = (req, res) => {
  db.Post.findAll({
    include: [
      {
        model: db.Status,
        where: { status: "Review" },
        attributes: ["id", "status"],
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

const getPlannedPosts = (req, res) => {
  db.Post.findAll({
    include: [
      {
        model: db.Status,
        where: { status: "Planned" },
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

const getInProgressPosts = (req, res) => {
  db.Post.findAll({
    include: [
      {
        model: db.Status,
        where: { status: "In Progress" },
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

const getCompletedPosts = (req, res) => {
  const postStatus = req.params.postStatus;
  db.Post.findAll({
    include: [
      {
        model: db.Status,
        where: { status: postStatus },
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

const getSinglePost = (req, res) => {
  const postId = req.params.postId;

  db.Post.findByPk(postId)
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      db.Comment.findAll({
        where: { post_id: postId },
      })
        .then((comments) => {
          // Fetch replies for each comment
          const fetchReplies = comments.map((comment) =>
            db.Reply.findAll({
              where: { comment_id: comment.id },
            })
              .then((replies) => {
                // Add replies to the comment
                comment.dataValues.replies = replies;
                return comment;
              })
          );

          // Wait for all promises to resolve
          Promise.all(fetchReplies)
            .then((commentsWithReplies) => {
              // Combine the post, comments, and replies into a single object
              const postWithCommentsAndReplies = {
                post: post,
                comments: commentsWithReplies,
              };

              // Send the combined data as a JSON response
              res.json(postWithCommentsAndReplies);
            })
            .catch((error) => {
              console.error(error);
              res.sendStatus(500);
            });
        })
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
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
  getSinglePost,
  getAllPostsByStatus,
  post
};
