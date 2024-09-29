const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware'); // Import the protect middleware

// Get user profile (protected route)
router.get('/profile', protect, getUserProfile);

module.exports = router;
