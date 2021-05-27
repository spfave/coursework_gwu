const { User } = require('../../models');

const createNewUser = async (userInput) =>
  new Promise(async (resolve, reject) => {
    try {
      // Check new user email is unique
      const emailExist = await userEmailExist(userInput.email);
      if (emailExist)
        reject(`Email ${userInput.email} already registered to a user`);

      // Create new user
      await User.create(userInput);
      resolve(`${userInput.name} thanks for signing up!`);
    } catch (error) {
      reject(error);
    }
  });

/**
 * Return true if email exists in database user table
 */
const userEmailExist = (email) =>
  new Promise(async (resolve, reject) => {
    try {
      // Search user table for email to check if already used
      const userData = await User.findOne({ where: { email } });

      if (!userData) resolve(false);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  createNewUser,
};
