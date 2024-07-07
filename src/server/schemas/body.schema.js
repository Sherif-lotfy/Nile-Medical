const mongoose = require("mongoose");

const theSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("Body", theSchema);