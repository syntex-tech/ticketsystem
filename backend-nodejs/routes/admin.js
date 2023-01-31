const express = require('express');
const router = express.Router();
const isAdmin = require("../routes/validateAdmin");
const User = require('../model/userreg');
const SkipassTicket = require('../model/SkipassTicket');
require('dotenv').config();



/* GET admin listing. */
router.get('/', isAdmin, async (req, res) => {
    res.send('Hier ist der Adminbereich');
});

router.post('/ticketLoeschen', isAdmin, async (req, res) => {
    const skipassticket = await SkipassTicket.findOneAndDelete({ email: req.body.email });
    if (!skipassticket) return res.status(404).send('Das Ticket wurde nicht gefunden');
    res.send("Der Skipass vom Benutzer " + skipassticket.email + " wurde gelöscht");

});

router.get('/userBefoerdern', isAdmin, async (req, res) => {
    res.send('Hier ist die route um user zum Admin zu machen');
});

router.get('/ticketScannen', isAdmin, async (req, res) => {
    res.send('Hier ist die route um ein Ticket zu scannen und auf gültigkeit zu überprüfen');
});

module.exports = router;