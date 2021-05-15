const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

// TODO: Add a comment describing the functionality of the withAuth middleware
// withAuth function will be run first before the route functionality begins execution
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      // TODO: Add a comment describing the functionality of this property
      // Sends the session logged in state as a parameter of object passed to the view
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  /**
   * Check if session has a logged in user.
   * if user is logged in: redirect to the home page as logged in
   * else: render and send login page
   */
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
