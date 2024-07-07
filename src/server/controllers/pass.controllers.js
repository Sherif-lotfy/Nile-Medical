const express = require("express");
const router2 = express.Router();
const passes = require("../schemas/pass.schema");

const getAllData = async (req, res) => {
  let data = await passes.find();
  res.json(data);
};

router2.get("/", getAllData);
module.exports = router2;
