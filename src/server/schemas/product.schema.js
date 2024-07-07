const mongoose = require("mongoose");

const theSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description:String
});

module.exports = mongoose.model("Product", theSchema);