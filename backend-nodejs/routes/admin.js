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

router.post('/userBefoerdern', isAdmin, async (req, res) => {
    const user = await User.findOneAndUpdate({ email: req.body.email}, { isAdmin: true }, { new: true });
    if (!user) return res.status(404).send('Das Benutzer wurde nicht gefunden');
    res.send("Der Benutzer " + user.email + " wurde zum Admin befördert");
});

router.get('/ticketScannen', isAdmin, async (req, res) => {
    const skipassticketid = await SkipassTicket.findById({ _id: req.body._id });
    if (!skipassticketid) return res.status(404).send('Das Ticket wurde nicht gefunden');
    res.send("Der Skipass mit der ID " + skipassticketid._id + " ist gültig.");
});

router.post('/ticketScannenZermatt', isAdmin, async (req, res) => {

});
module.exports = router;