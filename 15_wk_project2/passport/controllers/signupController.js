const getSignupPage = (req, res) => {
  res.render('signup');
};

const createNewUser = async (req, res) => {
  // Add validation

  console.log(req.body);
  res.redirect('/signup');
};

module.exports = { getSignupPage, createNewUser };
