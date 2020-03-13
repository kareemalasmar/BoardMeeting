const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String
    // Consider making required
  },
  skillLevel: {
    type: String
    // Consider making required
  },
  years: {
    type: String,
    required: true
  },
  mountains: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  log: [
    {
      title: {
        type: String,
        required: true
      },
      mountain: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      date: {
        type: Date,
        required: true
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
