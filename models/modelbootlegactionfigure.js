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
    type: Date,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  isAuthentic: {
    type: Boolean,
    default: false
  }
});

const BootlegActionFigure = mongoose.model('BootlegActionFigure', bootlegActionFigureSchema);

module.exports = BootlegActionFigure;
