const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Chats = new Schema({
    message: {
        type: String
    }
}, {
    collation: 'chats'
});

module.exports = mongoose.model('Chats',Chats);