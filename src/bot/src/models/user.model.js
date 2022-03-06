const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = Schema({
  id: {
    type: String,
    required: true,
  },
  coins: {
    type: Number,
    default: 0,
  },
  address: {
    type: String,
  },
  isConfigured: {
    type: Boolean,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
