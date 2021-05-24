const getLoginPage = (req, res) => {
  res.render('login');
};

// const loginUser = async (req, res) => {
//   // Add validation
//   res.redirect('/dashboard');
// };

const logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

module.exports = { getLoginPage, logout };
