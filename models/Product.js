const mongoose = require("mongoose");
// Product schema with required fields like name price decription and stock for MongoDB
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  stock: { type: Number, required: true }
});

module.exports = mongoose.model("Product", productSchema);