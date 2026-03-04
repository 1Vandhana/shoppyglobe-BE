// Main server file that connects to MongoDB , configures middleware and sets up all API routes through this server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api", require("./routes/authRoutes"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
