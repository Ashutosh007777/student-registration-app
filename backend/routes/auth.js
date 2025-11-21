const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password, department } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.json({ message: "Email already registered" });

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashed,
    department
  });

  res.json({ message: "User Registered" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "Invalid Credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.json({ message: "Invalid Credentials" });

  res.json({
    message: "Login Successful",
    userId: user._id
  });
});

module.exports = router;
