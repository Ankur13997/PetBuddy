const Adoption = require("../models/Adoption"); // Create an Adoption model
const User = require('../models/User');
// Handle adoption application
exports.applyForAdoption = async (req, res) => {
  try {
    const { userId, petId, message, name, email } = req.body;
    const newApplication = new Adoption(req.body);
    await newApplication.save();

    await User.findByIdAndUpdate(userId, {
      $push: { applications: newApplication._id },
    });
    
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting application", error });
  }
};

exports.getApplicationsByUserId = async (req, res) => {
  try {
    const applications = await Adoption.find({ userId: req.params.id });
    console.log(applications);
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving applications", error });
  }
};

exports.submitAdoptionApplication = async (req, res) => {
  try {
    const { userId, petId, message, name, email } = req.body;

    const newAdoption = new Adoption({
      userId,
      petId,
      message,
      name,
      email,
    });

    await newAdoption.save();

    // Update the user profile with the new application
    await User.findByIdAndUpdate(userId, {
      $push: { applications: newAdoption._id },
    });

    res.status(201).json(newAdoption);
  } catch (error) {
    res.status(500).json({ message: 'Error submitting application', error });
  }
};
