const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const fs = require('fs');

// Initialize Express App
const app = express();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB Connection
const connectDB = require('./db');
mongoose.connect(process.env.MONGODB_URI);
connectDB();

// Ensure the 'uploads' directory exists
const dir = './uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

// Serve images from the uploads directory
app.use('/uploads', express.static('uploads'));

// Import routes
const bootlegActionFiguresRoutes = require('./routes/routebootlegactionfigure'); // Adjust the path as necessary

// Use routes
app.use('/api', bootlegActionFiguresRoutes); // This will prefix '/api' to all your routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Server listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
