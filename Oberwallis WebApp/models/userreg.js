var mongoose = require('mongoose');

var regSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Userlist', regSchema);