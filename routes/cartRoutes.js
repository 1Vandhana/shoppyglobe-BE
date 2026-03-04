const express = require("express");
// Protected cart routes for adding , updating and deleting cart items using authentications middleware
const auth = require("../middleware/authMiddleware");
const { addToCart, updateCart, deleteCart } = require("../controllers/cartController");

const router = express.Router();

router.post("/", auth, addToCart);
router.put("/:id", auth, updateCart);
router.delete("/:id", auth, deleteCart);

module.exports = router;