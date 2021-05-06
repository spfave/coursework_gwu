const router = require("express").Router();
const User = require("../../models/User");

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    if (userData) {
      res.status(200).json(userData);
    } else {
      res
        .status(404)
        .json({ message: `No user with id ${req.params.id} found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal server error, try again later` });
  }
});

// UPDATE a user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (userData[0]) {
      res.status(200).json(userData);
    } else {
      res
        .status(404)
        .json({ message: `No user with id ${req.params.id} found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal server error, try again later` });
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (userData) {
      res.status(200).json(userData);
    } else {
      res
        .status(404)
        .json({ message: `No user with id ${req.params.id} found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal server error, try again later` });
  }
});

// This route uses async/await with try/catch for errors
// along with HTTP status codes
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

module.exports = router;
