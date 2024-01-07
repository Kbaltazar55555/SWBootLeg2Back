const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

// Initialize Express App
const app = express();

// Define CORS options
const corsOptions = {
    origin: 'http://localhost:4000/api/bootleg-action-figures',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// MongoDB Connection
const connectDB = require('./db');
mongoose.connect(process.env.MONGODB_URI);
connectDB();

// Multer for file uploads
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

// Import controllers
const bootlegActionFiguresController = require('./controllers/controllerbootlegactionfigure');

// Apply multer route for file uploads
// This route is specifically for uploading bootleg action figures with an image
app.post('/api/bootleg-action-figures', upload.single('image'), bootlegActionFiguresController.createBootlegActionFigure);

// Import and use other routes
// Ensure these routes do not have a conflicting POST route for /bootleg-action-figures
const authenticActionFiguresRoutes = require('./routes/routeauthenticactionfigure');
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
