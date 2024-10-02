require('dotenv').config();
const express = require("express");
var cors = require('cors');
const connectDb = require("./utils/db");
const authRoutes = require('./routes/authRoutes');
const petRoutes = require('./routes/petRoutes');
const adoptionRoutes = require('./routes/adoptionRoutes'); 
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/articleRoutes'); // Import article routes
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
const subscribeRoutes = require('./routes/subscribeRoutes')
var corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET, POST, DELETE, PATCH, HEAD, PUT",
  credentials: true,
};

const app = express();
app.use(cors(corsOptions)); 
app.use(helmet()); // Enhance security
app.use(morgan('dev')); // Log requests to the console

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/adoptions', adoptionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes); // Add articles route
app.use('/api', subscribeRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).json({ message: 'Internal Server Error' });
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
  });
});
