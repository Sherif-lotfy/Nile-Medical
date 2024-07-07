const express = require("express");
const jwt = require("jsonwebtoken");

const secretKey = "your-256-bit-secret";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "user" && password === "password") {
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true });

    return res.json({ username });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

router.post("/controlroom", (req, res) => {
  const token = req.body.value;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    return res.json({ message: "Protected content", user: decoded });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = router;
