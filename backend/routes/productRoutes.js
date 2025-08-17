import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Dummy insert route (optional - to add initial data)
router.post("/seed", async (req, res) => {
  const sample = [
    { name: "iPhone 15", price: 79999, image: "https://via.placeholder.com/200", category: "Mobiles" },
    { name: "MacBook Air", price: 120000, image: "https://via.placeholder.com/200", category: "Laptops" },
    { name: "Samsung TV", price: 45000, image: "https://via.placeholder.com/200", category: "Electronics" },
  ];
  await Product.insertMany(sample);
  res.send("Dummy products inserted");
});

export default router;
