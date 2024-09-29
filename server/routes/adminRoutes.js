const express = require('express');
const { getAdoptionApplications, updateApplicationStatus,addPet, deletePet,deleteAdoptionApplication } = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authMiddleware'); 
const router = express.Router();

// Get all adoption applications
router.get('/applications',protect, adminOnly, getAdoptionApplications);

router.put('/applications/:id',protect, adminOnly, updateApplicationStatus);

router.post('/add-pet', protect, adminOnly, addPet);
router.delete('/delete-pet/:id', protect, adminOnly, deletePet); 
router.delete('/applications/:id', protect, adminOnly, deleteAdoptionApplication);
module.exports = router;
