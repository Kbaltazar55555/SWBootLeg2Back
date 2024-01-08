const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Directory to save files
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Ensure unique filename
    }
});
const upload = multer({ storage: storage });

const bootlegActionFiguresController = require('../controllers/controllerbootlegactionfigure');

// POST request to add a new Bootleg Action Figure
// Use Multer middleware for handling file uploads
router.post('/bootleg-action-figures', upload.single('image'), bootlegActionFiguresController.createBootlegActionFigure);

// GET request for all Bootleg Action Figures
router.get('/bootleg-action-figures', bootlegActionFiguresController.getAllBootlegActionFigures);

// GET request for a single Bootleg Action Figure by ID
router.get('/bootleg-action-figures/:id', bootlegActionFiguresController.getBootlegActionFigureById);

// PUT request to update a Bootleg Action Figure by ID
router.put('/bootleg-action-figures/:id', bootlegActionFiguresController.updateBootlegActionFigure);

// DELETE request to delete a Bootleg Action Figure by ID
router.delete('/bootleg-action-figures/:id', bootlegActionFiguresController.deleteBootlegActionFigure);

module.exports = router;
