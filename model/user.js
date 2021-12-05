const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  password: { type: String, default: null }
});

module.exports = mongoose.model("ec_user", userSchema);