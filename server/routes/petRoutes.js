const express = require('express');
const { getPets, createPet, getAllPets, getPetById, updatePet, deletePet } = require('../controllers/petController');

const router = express.Router();

// Create a new pet
router.post('/', createPet);

// Get all pets or filter by query
router.get('/', getPets); // Updated to use getPets

// Get all pets
router.get('/', getAllPets);

// Get a pet by ID
router.get('/:id', getPetById);

// Update a pet
router.put('/:id', updatePet);

// Delete a pet
router.delete('/:id', deletePet);

module.exports = router;
