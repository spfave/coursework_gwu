const router = require('express').Router();
const passport = require('../config/passport');
const {
  isAuthenticated,
  isNotAuthenticated,
} = require('../utils/middleware/auth');
const userValidation = require('../utils/validators/userValidation');
const {
  signupController,
  loginController,
  homepageController,
  dashboardController,
} = require('../controllers');

// Homepage
router.get('/', isNotAuthenticated, homepageController.getHomepage);

// Dashboard
router.get('/dashboard', isAuthenticated, dashboardController.getDashboardPage);

// Sign up
router.get('/signup', isNotAuthenticated, signupController.getSignupPage);
router.post(
  '/signup',
  userValidation.validateNewUser,
  signupController.handleNewUser
);

// Login
router.get('/login', isNotAuthenticated, loginController.getLoginPage);
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    // failureFlash: true,
  })
);

// Logout
router.get('/logout', loginController.logout);

module.exports = router;
