const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Rates = new Schema({
    one: {
        type: String
    },
    two: {
        type: String
    },
    three: {
        type: String
    },
    four: {
        type: String
    },
    five: {
        type: String
    },
    total: {
        type: String
    },
    average: {
        type: String
    }
}, {
    collation: 'rates'
});

module.exports = mongoose.model('Rates',Rates);