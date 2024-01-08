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
  imagePath: { // Replacing 'image' field with 'imagePath'
    type: String,
    required: false // Image upload might be optional
  },
  description: {
    type: String,
    required: true
  },
});

const BootlegActionFigure = mongoose.model('BootlegActionFigure', bootlegActionFigureSchema);

module.exports = BootlegActionFigure;
