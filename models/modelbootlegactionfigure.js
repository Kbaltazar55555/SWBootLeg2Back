const mongoose = require('mongoose');

const bootlegActionFigureSchema = new mongoose.Schema({
  FigureName: {
    type: String,
    required: true
  },
  Manufacturer: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String, 
    required: true
  },
  imagePath: { 
    type: String,
    required: false 
  },
  description: {
    type: String,
    required: true
  },
});

const BootlegActionFigure = mongoose.model('BootlegActionFigure', bootlegActionFigureSchema);

module.exports = BootlegActionFigure;