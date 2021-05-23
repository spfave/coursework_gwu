const router = require('express').Router();
const { signupController, loginController } = require('../controllers');

// Homepage
router.get('/', (req, res) => {
  res.render('index');
});

// Dashboard
// router.get('/dashboard', (req, res) => {
//   res.render('dashboard');
// });

// Sign up page
router.get('/signup', signupController.getSignupPage);

// Login page
router.get('/login', loginController.getLoginPage);

module.exports = router;
