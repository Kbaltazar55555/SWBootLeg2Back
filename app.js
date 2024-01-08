const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const fs = require('fs');

// Start Express App
const app = express();

// Explicit CORS Options for Base64
const corsOptions = {
    origin: 'http://127.0.0.1:5500', 
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// MongoDB Connection
const connectDB = require('./db');
mongoose.connect(process.env.MONGODB_URI);
connectDB();

//  Multer for Pics
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dir = './uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

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
