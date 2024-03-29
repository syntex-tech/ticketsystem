const mongoose = require('mongoose');

const regSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Vorname: {
        type: String,
        required: true,
        max: 255,
        min: 1
    },
    Nachname: {
        type: String,
        required: true,
        max: 255,
        min: 1
    },
    Stadt: {
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    Postleitzahl: {
        type: String,
        required: true,
        max: 255,
        min: 3
    },
    Strasse: {
        type: String,
        required: true,
        max: 255,
        min: 3
    },
    Hausnummer: {
        type: String,
        required: true,
        max: 255,
        min: 1
    },
    Datum: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }

});


module.exports = mongoose.model('Userlist', regSchema);