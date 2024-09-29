const express = require('express');
const router = express.Router();
const { applyForAdoption,getApplicationsByUserId } = require('../controllers/adoptionController');

// Apply for adoption
router.post('/', applyForAdoption);
// Get applications by user ID
router.get('/user/:id', getApplicationsByUserId);
module.exports = router;
