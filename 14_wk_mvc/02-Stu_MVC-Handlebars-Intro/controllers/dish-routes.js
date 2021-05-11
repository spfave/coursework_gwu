// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
/**
 * This file is the controller
 * Responsible for interfacing actions taken on the view to make and
 * display changes made to the data (model)
 */

const router = require("express").Router();

// TODO: Add a comment describing the purpose of the get route
// Responds to a request from the client to the home path
router.get("/", async (req, res) => {
  //TODO: Add a comment describing the purpose of the render method
  /**
   * Renders an HTML template file (.handlebars) as HTML and sends to
   * the client for display
   */
  res.render("all");
});

module.exports = router;
