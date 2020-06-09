const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sampleModel = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String
    },
    github: {
        type: String
    },
    website: {
        type: String
    },
    docs: {
        type: String
    },
    other: {
        type: Array
    }
});

module.exports = mongoose.model('sampleModel',sampleModel);