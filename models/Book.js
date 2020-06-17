const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    view: {
        type: String,
        required: true
    },
    download: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Book',Book);