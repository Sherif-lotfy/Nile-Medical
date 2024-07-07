const express = require("express");
const router = express.Router();
const products = require("../schemas/body.schema");

const getAllData = async (req, res) => {
  let data = await products.find();
  res.json(data);
};
const add = async (req, res) => {
  let newproduct = new products(req.body);
  await newproduct.save();
  res.json(newproduct);
};
const getOne = async (req,res)=>{
  let data = await products.findOne(req.params)
  res.json(data);
}

router.post("/", add);
router.get("/", getAllData);
router.get('/:title',getOne);

module.exports = router;
