const express = require('express');
const router = express.Router();

const bootlegActionFiguresController = require('../controllers/controllerbootlegactionfigure');

// POST request to add a new Bootleg Action Figure
router.post('/bootleg-action-figures', bootlegActionFiguresController.createBootlegActionFigure);

// GET request for all Bootleg Action Figures
router.get('/bootleg-action-figures', bootlegActionFiguresController.getAllBootlegActionFigures);

// GET request for a single Bootleg Action Figure by ID
router.get('/bootleg-action-figures/:id', bootlegActionFiguresController.getBootlegActionFigureById);

// PUT request to update a Bootleg Action Figure by ID
router.put('/bootleg-action-figures/:id', bootlegActionFiguresController.updateBootlegActionFigure);

// DELETE request to delete a Bootleg Action Figure by ID
router.delete('/bootleg-action-figures/:id', bootlegActionFiguresController.deleteBootlegActionFigure);


module.exports = router;
