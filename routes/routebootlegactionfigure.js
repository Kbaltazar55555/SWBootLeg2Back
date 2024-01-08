const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});
const upload = multer({ storage: storage });

const bootlegActionFiguresController = require('../controllers/controllerbootlegactionfigure');

// POST request to add a new Bootleg Action Figure
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
