const AuthenticActionFigure = require('../models/modelauthenticactionfigure');

// Create a new Authentic Action Figure
exports.createAuthenticActionFigure = async (req, res) => {
    try {
        const newFigure = new AuthenticActionFigure(req.body);
        await newFigure.save();
        res.status(201).send(newFigure);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Retrieve all Authentic Action Figures
exports.getAllAuthenticActionFigures = async (req, res) => {
    try {
        const figures = await AuthenticActionFigure.find();
        res.status(200).send(figures);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Retrieve a single Authentic Action Figure by ID
exports.getAuthenticActionFigureById = async (req, res) => {
    try {
        const figure = await AuthenticActionFigure.findById(req.params.id);
        if (!figure) {
            return res.status(404).send();
        }
        res.send(figure);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update an Authentic Action Figure by ID
exports.updateAuthenticActionFigure = async (req, res) => {
    try {
        const figure = await AuthenticActionFigure.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!figure) {
            return res.status(404).send();
        }
        res.send(figure);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an Authentic Action Figure by ID
exports.deleteAuthenticActionFigure = async (req, res) => {
    try {
        const figure = await AuthenticActionFigure.findByIdAndDelete(req.params.id);
        if (!figure) {
            return res.status(404).send();
        }
        res.send(figure);
    } catch (error) {
        res.status(500).send(error);
    }
};