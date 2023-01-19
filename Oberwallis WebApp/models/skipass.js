var mongoose = require('mongoose');


const skiPassSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    validFrom: {
        type: Date,
        required: true
    },
    validUntil: {
        type: Date,
        required: true
    },
    skiResorts: [{
        type: String,
        required: true
    }],
    zermattDays: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    usageHistory: [{
        type: Date,
        required: true
    }]
});

module.exports = mongoose.model('Skipass', skiPassSchema);