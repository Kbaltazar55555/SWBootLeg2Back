const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://testasdf:asdf1234@cluster0.0rx3ugy.mongodb.net/test', {
        });
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;