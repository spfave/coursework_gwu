const router = require('express').Router();
// const { User } = require('../../models');

/*
Use signup and login controller to replace below route controllers
Code left here for historical purposes
*/

// Sign up new user
/* router.post('/signup', async (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (errors.length) {
    res.render('signup', { errors, ...req.body });
    return;
  }
  res.send('pass');
});

// Login user
router.post('/login', async () => {});

// Logout user
router.post('/logout', async () => {}); */

module.exports = router;
