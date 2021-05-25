const { body } = require('express-validator');

const validateNewUser = [
  body('email', 'Invalid email').isEmail().trim(),
  body('password', 'Password must be at least 8 characters').isLength({
    min: 8,
  }),
  body('password', 'Passwords do not match').custom(
    (value, { req }) => value === req.body.password2
  ),
];

module.exports = { validateNewUser };
