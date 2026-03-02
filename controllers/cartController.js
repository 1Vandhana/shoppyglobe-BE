const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const cartItem = await Cart.create({
    user: req.user,
    product: productId,
    quantity
  });

  res.status(201).json(cartItem);
};

exports.updateCart = async (req, res) => {
  const item = await Cart.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Cart item not found" });

  item.quantity = req.body.quantity;
  await item.save();

  res.json(item);
};

exports.deleteCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed from cart" });
};