const express = require("express");
const Product = require("../models/productModel"); // your Mongoose model
const router = express.Router();

// Add a single product
router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    const created = await product.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add multiple products
router.post("/add-multiple", async (req, res) => {
  try {
    const products = req.body; // expects an array of products
    const created = await Product.insertMany(products);
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
