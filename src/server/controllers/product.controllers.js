const express = require("express");
const router = express.Router();
const products = require("../schemas/product.schema");

const getAllData = async (req, res) => {
  let data = await products.find();
  res.json(data);
};
const add = async (req, res) => {
  let newproduct = new products(req.body);
  await newproduct.save();
  res.json(newproduct);
};
const getOne = async (req, res) => {
  let data = await products.findById(req.params);
  res.json(data);
};

router.post("/", add);
router.get("/", getAllData);
router.get("/:_id", getOne);

module.exports = router;
