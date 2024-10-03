// routes.js

const express = require('express');
const { subscribeEmail,saveContactUsInfo } = require('../controllers/subscribeController');

const router = express.Router();

// POST route for subscribing an email
router.post('/subscribe', subscribeEmail);
router.post('/contactus', saveContactUsInfo);

module.exports = router;
