const express = require("express");
const { getProducts, getSingleProduct } = require("../controller/productController");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getSingleProduct);


module.exports = router;