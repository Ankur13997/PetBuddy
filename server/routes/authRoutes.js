const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();
const { verifyToken, restrictAuthPages } = require('../middleware/authMiddleware');
const { getUserProfile } = require('../controllers/userController');

// Register route (only for non-authenticated users)
router.post('/register', restrictAuthPages, registerUser);

// Login route (only for non-authenticated users)
router.post('/login', restrictAuthPages, loginUser);

// Profile route (protected route)
router.get('/profile', verifyToken, getUserProfile);

module.exports = router;
