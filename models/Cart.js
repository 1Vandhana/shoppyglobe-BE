const mongoose = require("mongoose");

// The cart schema to store user, product reference and quanatity in mongoDB
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true }
});

module.exports = mongoose.model("Cart", cartSchema);