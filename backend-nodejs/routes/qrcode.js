const express = require('express');
const router = express.Router();
const auth = require("../routes/validateToken");
const Ticket = require('../model/ticket');
const qr = require('qr-image');

router.get('/', (req,res) => {
    res.send('Hier kannst du den Skipass kaufen!');
});


router.get('/qr', auth, async (req, res) => {

    const userId = req.userData._id;
    const ticket = await Ticket.findOne({ userId: userId });
    const ticketId = ticket._id;
    if (!ticketId) {
        return res.status(400).send({ message: 'Bitte kaufen sie vorher ein Ticket' });
    }
    const qr_svg = qr.imageSync(ticketId.toString(), { type: 'svg' });
    res.type('svg');
    res.send(qr_svg);
});

module.exports = router;