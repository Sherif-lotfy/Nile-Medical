const mongoose = require("mongoose");

const theSchema2 = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("Pass", theSchema2);