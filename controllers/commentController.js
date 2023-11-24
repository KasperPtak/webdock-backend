const db = require("../models"); // Import your Sequelize instance

const getPostWithCommentsFromComment = (req, res) => {
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
          const postWithComments = {
            post: post,
            comments: comments,
          };

          res.json(postWithComments);
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
    getPostWithCommentsFromComment,
  };
  

