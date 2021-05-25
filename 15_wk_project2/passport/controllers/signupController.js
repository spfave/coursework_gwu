const userServices = require('../utils/services/userServices');

const getSignupPage = (req, res) => {
  res.render('signup');
};

const createNewUser = async (req, res) => {
  console.log(req.body); // TESTING

  // Validate signup inputs

  // Create new user object
  try {
    const signupInput = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2,
    };
    const msgUserCreated = await userServices.createNewUser(signupInput);
    console.log(msgUserCreated);

    res.redirect('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSignupPage, createNewUser };
