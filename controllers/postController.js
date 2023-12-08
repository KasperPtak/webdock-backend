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
        attributes: ["content"],
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
    where: {
      /* your conditions here */
    },
    include: [
      {
        model: db.Status,
        where: { status: postStatus },
        attributes: ["status"],
      },
      {
        model: db.Comment,
        separate: true,
      },
      {
        model: db.Category,
        attributes: ["category"],
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
            include: [
              {
                model: db.User,
                attributes: ["name", "email"],
              },
            ],
          },
          {
            model: db.User,
            attributes: ["name", "email"],
          },
        ],
      },
      {
        model: db.Status,
        attributes: ["status"],
      },
      {
        model: db.Category,
        attributes: ["category"],
      },
      {
        model: db.User,
        attributes: ["name", "email"],
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
      post_id: postId,
    },
    include: [
      {
        model: db.User,
        attributes: ["name", "avatarURL", "email"],
      },
    ],
  })
    .then((upvotes) => {
      const totalUpvotes = upvotes.length;

      res.json({
        upvotes: upvotes,
        totalUpvotes: totalUpvotes,
      });
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
      master_post: postId,
    },
    include: [
      {
        model: db.Post,
        attributes: ["Title"],
      },
    ],
  })
    .then((posts) => {
      const postContents = posts.map((post) => post.Post);

      res.json(postContents);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal Server Error");
    });
};

const createNewPost = async (req, res) => {
  try {
    // body:formdata fromn the frontend
    const { title, content, user_id } = req.body;
    const files = req.files;

    const image = files.map((file) => file.originalname).join(", ");

    const result = await db.Post.create({
      category_id: 1,
      status_id: 1,
      upvotes: 0,
      title,
      content,
      user_id: parseInt(user_id, 10),
      // user_id,
      image: image,
    });

    const externalEndpoint =
      "https://webdock.io/en/platform_data/feature_requests/new";
    const externalData = {
      userID: parseInt(user_id, 10),
      title: title,
      description: content,
      category: 1,
    };

    const response = await fetch(externalEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(externalData),
    });
    const responseData = await response.json(); // Assuming the response is in JSON format
    console.log("external data:", externalData);
    console.log("External API Response:", responseData);

    res.status(201).json({ message: "Data saved successfully", data: result });
  } catch (error) {
    // sequelize error:
    if (error.name === "SequelizeValidationError") {
      res
        .status(400)
        .json({ error: "Validation failed", details: error.errors });
    } else {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = {
  getPostsWithStatus,
  getAllPostsByStatus,
  postIsUpvotedBy,
  post,
  mergedPost,
  createNewPost,
};
