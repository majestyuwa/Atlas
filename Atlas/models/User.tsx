const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  workouts: {
    type: Array,
    default: []
  },
  currentWorkout: {
    type: String,
    required: false
  },
  friends: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model('users', UserSchema);
