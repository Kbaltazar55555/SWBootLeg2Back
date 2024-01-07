const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });
const mongoURI = process.env.MONGODB_URI;
const Database = process.env.DB_NAME;


const app = express();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 
app.post('/upload-image', upload.single('image'), (req, res) => {});

// MongoDB connection

mongoose.connect(mongoURI);

// Connect to Database
connectDB();

// Import routes
const bootlegActionFiguresRoutes = require('./routes/routebootlegactionfigure');

const authenticActionFiguresRoutes = require('./routes/routeauthenticactionfigure');


// Use routes
app.use('/api', bootlegActionFiguresRoutes);
app.use('/api', authenticActionFiguresRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Define a port and start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
