const User = require('../models/User');
const Adoption = require('../models/Adoption');

// Fetch User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate({
      path: 'applications',
      populate: { path: 'petId', model: 'Pet' }, // Include pet details in the applications
    });
  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};
