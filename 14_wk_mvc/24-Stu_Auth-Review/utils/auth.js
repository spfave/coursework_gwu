const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  /**
   * Check if user session is logged in
   * if not logged in: redirect to login page
   * else: continue with route functionality
   */
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
