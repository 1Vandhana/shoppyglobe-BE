require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/productRoutes"));
app.use("/api", require("./routes/cartRoutes"));

app.post("/check", (req, res) => {
  res.json({ message: "Working perfectly" });
});
const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});