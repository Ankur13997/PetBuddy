// controllers/testimonialController.js
const Testimonial = require('../models/Testimonial');

// Function to add a new testimonial
const addTestimonial = async (req, res) => {
    const { text, name, role } = req.body;

    if (!text || !name || !role) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newTestimonial = new Testimonial({ text, name, role });
        await newTestimonial.save();
        return res.status(201).json(newTestimonial);
    } catch (error) {
        console.error('Error adding testimonial:', error);
        return res.status(500).json({ message: 'Failed to add testimonial' });
    }
};

// Function to get all testimonials
const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        return res.status(200).json(testimonials);
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return res.status(500).json({ message: 'Failed to fetch testimonials' });
    }
};

// Function to update a testimonial
const updateTestimonial = async (req, res) => {
    const { id } = req.params; // Extract id from request parameters
    const { text, name, role } = req.body;

    if (!text || !name || !role) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, { text, name, role }, { new: true });
        if (!updatedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }
        return res.status(200).json(updatedTestimonial);
    } catch (error) {
        console.error('Error updating testimonial:', error);
        return res.status(500).json({ message: 'Failed to update testimonial' });
    }
};

// Function to delete a testimonial
const deleteTestimonial = async (req, res) => {
    const { id } = req.params; // Extract id from request parameters

    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
        if (!deletedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }
        return res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        console.error('Error deleting testimonial:', error);
        return res.status(500).json({ message: 'Failed to delete testimonial' });
    }
};

// Export the functions
module.exports = { addTestimonial, getTestimonials, updateTestimonial, deleteTestimonial };
