const isAuthenticated = (req, res, next) => {
  // if the user is logged in continue to next function
  // else: redirect to login page
  if (req.isAuthenticated()) return next();
  // req.flash('error_msg','Please log in to view this content')
  res.redirect('/login');
};

const isNotAuthenticated = (req, res, next) => {
  // If the user is logged in, redirect to user dashboard
  if (req.isAuthenticated()) return res.redirect('/dashboard');
  next();
};

module.exports = { isAuthenticated, isNotAuthenticated };
