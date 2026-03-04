const express = require("express");
// creates authentication routes for user registration and login.
const { register, login } = require("../controllers/authController");
const router = express.Router();
router.post("/register", register);
router.post("/login", login);

module.exports = router;