const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Feedbacks = new Schema({
    type: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
}, {
    collation: 'feedbacks'
});

module.exports = mongoose.model('Feedbacks',Feedbacks);