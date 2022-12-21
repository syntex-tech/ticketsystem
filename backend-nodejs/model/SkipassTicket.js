const mongoose = require('mongoose');


const TicketSchema = mongoose.Schema({
    
    /*Ticketnummer: {
        type: String,
        default: mongoose.ObjectId,
    },*/
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
        type: String,
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

module.exports = mongoose.model('SkipassTicket', TicketSchema);