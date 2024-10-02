// routes.js

const express = require('express');
const { subscribeEmail } = require('../controllers/subscribeController');

const router = express.Router();

// POST route for subscribing an email
router.post('/subscribe', subscribeEmail);

module.exports = router;
