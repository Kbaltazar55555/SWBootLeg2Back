const mongoose = require('mongoose');

const authenticActionFigureSchema = new mongoose.Schema({
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
    default: true  // Set default to true for authentic figures
  }
});

const AuthenticActionFigure = mongoose.model('AuthenticActionFigure', authenticActionFigureSchema);

module.exports = AuthenticActionFigure;
