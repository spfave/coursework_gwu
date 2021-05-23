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
router.post('/signup', signupController.createNewUser);

// Login page
router.get('/login', loginController.getLoginPage);
router.post('/login', loginController.loginUser);

module.exports = router;
