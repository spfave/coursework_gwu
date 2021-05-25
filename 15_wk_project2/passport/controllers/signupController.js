const { validationResult } = require('express-validator');
const userServices = require('../utils/services/userServices');

const getSignupPage = (req, res) => {
  res.render('signup', { errors: req.flash('errors') });
};

const handleNewUser = async (req, res) => {
  // Validate signup inputs
  const msgErrors = [];
  const validationErrors = validationResult(req).errors;

  if (validationErrors.length) {
    validationErrors.forEach((err) => msgErrors.push(err.msg));
    req.flash('errors', msgErrors);
    return res.redirect('/signup');
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
    res.redirect('/signup');
    // console.log(error);
  }
};

module.exports = { getSignupPage, handleNewUser };
