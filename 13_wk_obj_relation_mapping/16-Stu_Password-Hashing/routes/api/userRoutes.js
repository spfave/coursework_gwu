const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

// TODO: Add comments describing the functionality of this `login` route
router.post("/login", async (req, res) => {
  /**
   * try catch block
   * try: to login with correct email and password
   */
  try {
    // Search for input email in User table
    const userData = await User.findOne({ where: { email: req.body.email } });
    // check if user was found based on email
    if (!userData) {
      // Send 404 error if no user found
      res.status(404).json({ message: "Login failed. Please try again!" });
      return;
    }

    // hash input password and compare to hashed password saved in User table
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    // check if hashed password matches stored hashed password value
    if (!validPassword) {
      // if password check is false send 400 error
      res.status(400).json({ message: "Login failed. Please try again!" });
      return;
    }

    // Send 200 error if password check passed successfully
    res.status(200).json({ message: "You are now logged in!" });
  } catch (err) {
    // Send 500 error if any server error occurred during login check function
    res.status(500).json(err);
  }
});

module.exports = router;
