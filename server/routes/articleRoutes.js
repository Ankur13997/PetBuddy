// routes/articleRoutes.js
const express = require('express');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const { addArticle, getArticles, updateArticle, deleteArticle,getArticleById } = require('../controllers/articleController');
const router = express.Router();

// Public route to get all articles
router.get('/', getArticles);

// Admin-only routes
router.post('/', protect, adminOnly, addArticle); // Create article
router.put('/:id', protect, adminOnly, updateArticle); // Update article
router.delete('/:id', protect, adminOnly, deleteArticle); // Delete article
router.get('/:id', getArticleById); 
module.exports = router;
