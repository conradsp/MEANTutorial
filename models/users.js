var mongoose = require('mongoose');

module.exports = mongoose.model('user', new mongoose.Schema({
    name : { type: String, required: true },
    email : { type: String },
    role : { type: String, default: 'guest' }
}),'user');