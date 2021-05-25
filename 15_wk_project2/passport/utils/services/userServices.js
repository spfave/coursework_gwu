const { User } = require('../../models');

const createNewUser = async (userInput) =>
  new Promise(async (resolve, reject) => {
    try {
      // Check new user email is unique
      const isEmailUnique = await uniqueUserEmail(userInput.email);
      if (!isEmailUnique)
        reject(`Email ${userInput.email} already registered to a user`);

      // Create new user
      await User.create(userInput);
      resolve(`${userInput.name} thanks for signing up!`);
    } catch (error) {
      reject(error);
    }
  });

/**
 * Return true if email is unique (does not already exist in user table)
 */
const uniqueUserEmail = (email) =>
  new Promise(async (resolve, request) => {
    try {
      // Search user table for email to check if already used
      const userData = await User.findOne({ where: { email } });

      if (userData) resolve(false);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  createNewUser,
};
