const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    required: 'Username required',
    trim: true,
  },
  password: {
    type: String,
    required: true,
    time: true,
    minLength: [6, 'Password must be at least 6 characters'],
  },
  email: {
    type: String,
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
