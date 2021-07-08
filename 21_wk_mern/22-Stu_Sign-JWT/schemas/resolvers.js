const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    addUser: async (parent, args) => {
      // Use the User model to create a new user
      const user = await User.create(args);
      // Using the new user data create a JWT token for the user
      const token = signToken(user);
      // Return token and user variable values
      return { token, user };
    },
    // TODO: Add comments to each line of code below to describe the functionality below
    login: async (parent, { email, password }) => {
      // Find a user using the User model indexing on their email
      const user = await User.findOne({ email });
      // if no user is found throw an error indicating the credentials do not match to a user
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // Check the user's password to ensure it matches to the registered user
      const correctPw = await user.isCorrectPassword(password);
      // if the passwords do not match throw an error indication the credential do not match to a user
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // For an approved user create a new JWT token
      const token = signToken(user);
      return { token, user };
    },
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
