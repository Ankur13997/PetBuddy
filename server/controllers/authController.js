const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, isAdmin: user.isAdmin }, // Include id and name in the token payload
    process.env.JWT_SECRET, 
    { expiresIn: '3d' }
  );
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user without hashing the password here
    user = new User({ name, email, password }); // Pass plain password
    await user.save(); // Pre-save middleware will hash the password

    const token = generateToken(user); // Pass the user object to generateToken
    res.status(201).json({ token });
  } catch (err) {
    console.error("Error during registration:", err); 
    res.status(500).json({ message: 'Server error' });
  }
};


// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user); // Pass the user object to generateToken
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
