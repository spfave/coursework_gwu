const getLoginPage = (req, res) => {
  res.render('login', { errors: req.flash('errors') });
};

// Handled with passport middleware
// const loginUser = async (req, res) => {
//   // Add validation
//   res.redirect('/dashboard');
// };

const logout = (req, res) => {
  req.logout();
  req.flash('msg_info', 'You are logged out');
  res.redirect('/');
};

module.exports = { getLoginPage, logout };
