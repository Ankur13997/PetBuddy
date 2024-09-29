const Pet = require('../models/Pet');

// Get pets with optional filtering
exports.getPets = async (req, res) => {
    try {
      const { species, breed, age, location } = req.query;
      let query = {};
  
      if (species) query.species = species;
      if (breed) query.breed = breed;
      if (age) query.age = age;
      if (location) query.location = location;
  
      const pets = await Pet.find(query);
      res.status(200).json(pets);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving pets", error });
    }
  };
  

// Create a new pet listing
exports.createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    res.status(500).json({ message: "Error creating pet listing", error });
  }
};

// Get all pets
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving pet listings", error });
  }
};

// Get pet by ID
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving pet", error });
  }
};

// Update pet listing
exports.updatePet = async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: "Error updating pet", error });
  }
};

// Delete pet listing
exports.deletePet = async (req, res) => {
  try {
    console.log('Pet ID to delete:', req.params.id);
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting pet", error });
  }
};
