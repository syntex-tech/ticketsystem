const mongoose = require('mongoose');


const test = mongoose.Schema({

    Vorname: {
        type: String,
        required: true,
        max: 255,
        min: 1
    },
})



module.exports = mongoose.model('Ticket', test);