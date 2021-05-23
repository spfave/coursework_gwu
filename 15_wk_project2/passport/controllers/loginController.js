const getLoginPage = (req, res) => {
  res.render('login');
};

const loginUser = async (req, res) => {
  // Add validation

  console.log(req.body);
  res.redirect('/login');
};

module.exports = { getLoginPage, loginUser };
