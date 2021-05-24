const router = require('express').Router();
const passport = require('../config/passport');
const {
  signupController,
  loginController,
  homepageController,
  dashboardController,
} = require('../controllers');

// Homepage
router.get('/', homepageController.getHomepage);

// Dashboard
router.get('/dashboard', dashboardController.getDashboardPage);

// Sign up
router.get('/signup', signupController.getSignupPage);
router.post('/signup', signupController.createNewUser);

// Login
router.get('/login', loginController.getLoginPage);
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
);

// Logout
router.get('/logout', loginController.logout);

module.exports = router;
