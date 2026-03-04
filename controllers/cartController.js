const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    const cartItem = await Cart.create({
      user: req.user,
      product: productId,
      quantity
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const cartItem = await Cart.findById(req.params.id);
    if (!cartItem)
      return res.status(404).json({ message: "Cart item not found" });

    cartItem.quantity = req.body.quantity;
    await cartItem.save();

    res.json(cartItem);
  } catch (error) {
    res.status(400).json({ message: "Invalid cart ID" });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(400).json({ message: "Invalid cart ID" });
  }
};