const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

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

// Multer for file uploads
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const bootlegActionFiguresController = require('./controllers/controllerbootlegactionfigure');

app.post('/api/bootleg-action-figures', upload.single('image'), bootlegActionFiguresController.createBootlegActionFigure);

const authenticActionFiguresRoutes = require('./routes/routeauthenticactionfigure');
app.use('/api', authenticActionFiguresRoutes);

const bootlegActionFiguresRoutes = require('./routes/routebootlegactionfigure');

app.use('/api', bootlegActionFiguresRoutes);

app.get('/images/:id', async (req, res) => {
    try {
        const figure = await BootlegActionFigure.findById(req.params.id);
        if (!figure || !figure.image) {
            throw new Error();
        }
        res.set('Content-Type', 'image/jpeg'); // Set appropriate content type
        res.send(figure.image);
    } catch (e) {
        res.status(404).send();
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
