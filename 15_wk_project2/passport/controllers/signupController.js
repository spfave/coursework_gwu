const { validationResult } = require('express-validator');
const userServices = require('./services/userServices');

const getSignupPage = (req, res) => {
  res.render('signup', { errors: req.flash('errors') });
};

const handleNewUser = async (req, res) => {
  // Maintain user signup inputs if errors
  const signupForm = {
    name: req.body.name,
    email: req.body.email,
  };

  // Validate signup inputs
  const msgErrors = [];
  const validationErrors = validationResult(req).errors;

  if (validationErrors.length) {
    validationErrors.forEach((err) => msgErrors.push(err.msg));
    req.flash('errors', msgErrors);
    return res.render('signup', { errors: req.flash('errors'), ...signupForm });
  }

  // Create new user object
  try {
    const signupInput = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2,
    };
    await userServices.createNewUser(signupInput);

    res.redirect('/dashboard');
  } catch (error) {
    req.flash('errors', error);
    res.render('signup', { errors: req.flash('errors'), ...signupForm });
  }
};

module.exports = { getSignupPage, handleNewUser };
