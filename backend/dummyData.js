const mongoose = require("mongoose");
const Product = require("./models/productModel");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  { name: "iPhone 15", price: 120000, category: "Mobiles", image: "https://via.placeholder.com/150" },
  { name: "Samsung Galaxy S23", price: 95000, category: "Mobiles", image: "https://via.placeholder.com/150" },
  { name: "Nike Air Max", price: 8000, category: "Fashion", image: "https://via.placeholder.com/150" },
  { name: "Adidas Sneakers", price: 7500, category: "Fashion", image: "https://via.placeholder.com/150" },
  { name: "Dell Laptop", price: 85000, category: "Electronics", image: "https://via.placeholder.com/150" },
  { name: "Canon Camera", price: 45000, category: "Electronics", image: "https://via.placeholder.com/150" },
  { name: "Wooden Chair", price: 5000, category: "Home & Furniture", image: "https://via.placeholder.com/150" },
  { name: "LED Lamp", price: 1500, category: "Home & Furniture", image: "https://via.placeholder.com/150" },
  { name: "Harry Potter Book Set", price: 2500, category: "Books", image: "https://via.placeholder.com/150" },
  { name: "The Alchemist", price: 500, category: "Books", image: "https://via.placeholder.com/150" },
];

const insertData = async () => {
  try {
    await Product.deleteMany(); // Clear existing
    await Product.insertMany(products);
    console.log("Dummy data inserted!");
    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};

insertData();
