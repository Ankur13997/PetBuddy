const Adoption = require('../models/Adoption');
const Pet = require('../models/Pet');

// Get all adoption applications
exports.getAdoptionApplications = async (req, res) => {
  try {
    const applications = await Adoption.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving applications', error });
  }
};

exports.updateApplicationStatus = async (req, res) => {
    console.log('Request Params:', req.params);
    console.log('Request Body:', req.body);
  
    try {
      const application = await Adoption.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
      if (!application) {
        return res.status(404).json({ message: 'Application not found' });
      }
      // Send email notification, etc.
      res.status(200).json(application);
    } catch (error) {
      console.error('Error updating application:', error);
      res.status(500).json({ message: 'Error updating application', error });
    }
  };
  

  // Add a new pet (admin only)
exports.addPet = async (req, res) => {
  try {
    const { name, species, breed, age, size, location, description, photos, adoptionRequirements } = req.body;

    // Create a new pet entry in the database
    const newPet = new Pet({
      name,
      species,
      breed,
      age,
      size,
      location,
      description,
      photos,
      adoptionRequirements,
    });

    // Save the new pet to the database
    const savedPet = await newPet.save();

    res.status(201).json(savedPet);
  } catch (error) {
    res.status(500).json({ message: 'Error adding pet', error });
  }
};


exports.deletePet = async (req, res) => {
  try {
    console.log('Deleting pet with ID:', req.params.id);  // Log the ID being passed

    // Use findByIdAndDelete instead of pet.remove()
    const pet = await Pet.findByIdAndDelete(req.params.id);

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    console.error('Error deleting pet:', error); // Log the actual error
    res.status(500).json({ message: 'Error deleting pet', error });
  }
};

// Delete adoption application by ID

exports.deleteAdoptionApplication = async (req, res) => {
  try {
    console.log('Deleting adoption application with ID:', req.params.id); // Log the ID being passed

    // Find the adoption application by ID and delete it
    const application = await Adoption.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json({ message: 'Adoption application deleted successfully' });
  } catch (error) {
    console.error('Error deleting application:', error); // Log the actual error
    res.status(500).json({ message: 'Error deleting application', error });
  }
};

  
