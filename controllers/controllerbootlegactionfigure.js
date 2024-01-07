const BootlegActionFigure = require('../models/modelbootlegactionfigure');

// Create a new Bootleg Action Figure
exports.createBootlegActionFigure = async (req, res) => {
    try {
        const newFigure = new BootlegActionFigure(req.body);
        await newFigure.save();
        res.status(201).send(newFigure);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Retrieve all Bootleg Action Figures
exports.getAllBootlegActionFigures = async (req, res) => {
    try {
        const figures = await BootlegActionFigure.find();
        res.status(200).send(figures);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Retrieve a single Bootleg Action Figure by ID
exports.getBootlegActionFigureById = async (req, res) => {
    try {
        const figure = await BootlegActionFigure.findById(req.params.id);
        if (!figure) {
            return res.status(404).send();
        }
        res.send(figure);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a Bootleg Action Figure by ID
exports.updateBootlegActionFigure = async (req, res) => {
    try {
        const figure = await BootlegActionFigure.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!figure) {
            return res.status(404).send();
        }
        res.send(figure);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a Bootleg Action Figure by ID
exports.deleteBootlegActionFigure = async (req, res) => {
    try {
        const figure = await BootlegActionFigure.findByIdAndDelete(req.params.id);
        if (!figure) {
            return res.status(404).send();
        }
        res.send(figure);
    } catch (error) {
        res.status(500).send(error);
    }
};
