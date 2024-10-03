// routes/testimonialRoutes.js
const express = require('express');
const {
    addTestimonial,
    getTestimonials,
    updateTestimonial,
    deleteTestimonial,
} = require('../controllers/testimonialController');

const router = express.Router();

// POST route to add a testimonial
router.post('/testimonials', addTestimonial);

// GET route to fetch all testimonials
router.get('/testimonials', getTestimonials);

// PUT route to update a testimonial
router.put('/testimonials/:id', updateTestimonial);

// DELETE route to delete a testimonial
router.delete('/testimonials/:id', deleteTestimonial);

module.exports = router;
