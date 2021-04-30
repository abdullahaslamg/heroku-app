const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 5,
        max: 10
    },
    age: Number,
    work: String,
    address: String
})

const Api = mongoose.model('Api', apiSchema);

module.exports = Api;
