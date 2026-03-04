const express = require("express");
// Routes to fetch all products and a single product by ID.
const { getProducts, getSingleProduct } = require("..c/ontrollers/productController.js");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getSingleProduct);

module.exports = router;