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
        type: String, 
        required: true
      },
      image: {
        type: Buffer,
        required: false
      },
      description: {
        type: String,
        required: true
      },
    });

const AuthenticActionFigure = mongoose.model('AuthenticActionFigure', authenticActionFigureSchema);

module.exports = AuthenticActionFigure;
