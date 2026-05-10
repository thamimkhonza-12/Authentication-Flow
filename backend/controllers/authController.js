const bcrypt = require("bcryptjs");
const users = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// REGISTER
exports.register = async (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find((u) => u.email === email);
  if (userExists) return res.status(400).json({ message: "User exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: Date.now(),
    email,
    password: hashedPassword,
  };

  users.push(user);

  res.json({
    id: user.id,
    email: user.email,
    token: generateToken(user.id),
  });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  res.json({
    id: user.id,
    email: user.email,
    token: generateToken(user.id),
  });
};

// GET PROFILE (protected)
exports.getProfile = (req, res) => {
  res.json({ message: "Protected data", user: req.user });
};