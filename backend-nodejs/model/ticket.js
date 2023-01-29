const mongoose = require('mongoose');


const ticketSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        reuired: true,
        max: 255,
        min: 3
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
    Datum: {
        type: Date,
        default: Date.now
    },
    AnzahlZutritteZermatterBergbahnen: {
        type: Number,
        default: 5
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
})

module.exports = mongoose.model('ticket', ticketSchema);