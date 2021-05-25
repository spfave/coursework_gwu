const getLoginPage = (req, res) => {
  res.render('login');
};

// Handled with passport middleware
// const loginUser = async (req, res) => {
//   // Add validation
//   res.redirect('/dashboard');
// };

const logout = (req, res) => {
  req.logout();
  req.flash('msg_success', 'You are logged out');
  res.redirect('/');
};

module.exports = { getLoginPage, logout };
