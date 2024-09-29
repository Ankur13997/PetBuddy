const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Get token from headers
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from token
      req.user = await User.findById(decoded.id).select('-password');
      console.log(req.user);
      next();
    } catch (err) {
      console.log(err);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

  if (!token) return res.status(403).send('Token is required.');

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).send('Invalid Token.');

    req.user = await User.findById(decoded.id); // Attach user to request
    next();
  });
};

// Middleware to check if the user is an admin
exports.adminOnly = (req, res, next) => {
  console.log(req.user.isAdmin);
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

// exports.restrictAuthPages = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1]; // Bearer token

//   if (!token) {
//     return next(); // No token, user is not logged in, allow access
//   }

//   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
//     if (err) {
//       return next(); // Invalid token, allow access to login/register
//     }

//     // If the user is authenticated, redirect them away from auth pages
//     req.user = await User.findById(decoded.id); // Attach user to request
//     if (req.user) {
//       return res.redirect('/'); // Redirect authenticated users to home page or profile
//     } else {
//       next(); // No user found, allow access to auth pages
//     }
//   });
// };

exports.restrictAuthPages = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token from headers

  if (!token) {
    // No token: user is not logged in, so allow access to login/register
    return next();
  }

  // If a token exists, verify it
  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      // Invalid token: continue to login/register
      return next();
    }

    // Valid token: User is authenticated, prevent access to login/register
    req.user = await User.findById(decoded.id);
    if (req.user) {
      return res.status(403).json({ message: 'You are already logged in.' });
    }
    
    next(); // Allow access if no valid user is found
  });
};
