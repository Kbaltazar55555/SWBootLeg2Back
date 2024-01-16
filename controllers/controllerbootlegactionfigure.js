//JUST IN CASE I FUCK UP MY PUSH
// Create a new Bootleg Action Figure
/*exports.createBootlegActionFigure = async (req, res) => {
    try {
        const newFigure = new BootlegActionFigure(req.body);
        await newFigure.save();
        res.status(201).send(newFigure);
    } catch (error) {
        res.status(400).send(error);
    }
};*/

const BootlegActionFigure = require('../models/modelbootlegactionfigure');
const fs = require('fs');


exports.createBootlegActionFigure = async (req, res) => {
    try {
        const imagePath = req.file ? req.file.path : ''; 

        const newFigure = new BootlegActionFigure({
            FigureName: req.body.FigureName,
            releaseDate: req.body.releaseDate,
            Manufacturer: req.body.Manufacturer,
            description: req.body.description,
            imagePath 
        })

        const savedFigure = await newFigure.save();
        res.status(201).json(savedFigure);
    } catch (err) {
        res.status(400).json({ msg: err.message });
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

// Update a Bootleg Action Figure
exports.updateBootlegActionFigure = async (req, res) => {
    try {
        // Find the existing figure
        const figure = await BootlegActionFigure.findById(req.params.id);
        if (!figure) {
            return res.status(404).send('Figure not found');
        }

        // Handle the image file if it's part of the request
        if (req.file) {
            // Delete the old image file if it exists
            if (figure.imagePath && fs.existsSync(figure.imagePath)) {
                fs.unlinkSync(figure.imagePath);
            }
            // Update the imagePath with the new file path
            figure.imagePath = req.file.path;
        }
        // Update other figure details
        figure.FigureName = req.body.FigureName || figure.FigureName;
        figure.Manufacturer = req.body.Manufacturer || figure.Manufacturer;
        figure.releaseDate = req.body.releaseDate || figure.releaseDate;
        figure.description = req.body.description || figure.description;
        // Save the updated figure
        await figure.save();
        res.status(200).send('Figure updated successfully');
    } catch (error) {
        res.status(500).send('Server error: ' + error.message);
    }
};