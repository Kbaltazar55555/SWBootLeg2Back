const express = require('express');
const router = express.Router();

const authenticActionFiguresController = require('../controllers/controllerauthenticactionfigure');

// Adapt these routes for your authentic figures, similar to your bootleg figures routes

router.post('/authentic-action-figures', authenticActionFiguresController.createAuthenticActionFigure);
router.get('/authentic-action-figures', authenticActionFiguresController.getAllAuthenticActionFigures);
router.get('/authentic-action-figures/:id', authenticActionFiguresController.getAuthenticActionFigureById);
router.put('/authentic-action-figures/:id', authenticActionFiguresController.updateAuthenticActionFigure);
router.delete('/authentic-action-figures/:id', authenticActionFiguresController.deleteAuthenticActionFigure);

module.exports = router;
