const jwt = require("jsonwebtoken");
// Middleware to verify JWT token before allowing access
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
// check if authorizatio header exists
  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });
// Extracting token from "Bearer token"
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next(); // To continue
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};