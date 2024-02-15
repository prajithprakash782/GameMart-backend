const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    name: {
      type: String, 
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    cartData: {
      type: Object,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

  const users = mongoose.model("users",Users)

  module.exports = users 