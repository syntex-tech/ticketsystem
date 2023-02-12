const express = require('express');
const router = express.Router();
const isAdmin = require("../routes/validateAdmin");
const User = require('../model/userreg');
const SkipassTicket = require('../model/SkipassTicket');
require('dotenv').config();


router.get('/', isAdmin, async (req, res) => {
    const user = await User.findById(req.userData._id);
    res.send({
        Vorname: user.Vorname,
        isAdmin: user.isAdmin
    });
});

router.post('/ticketLoeschen', isAdmin, async (req, res) => {
    const skipassticket = await SkipassTicket.findOneAndDelete({ email: req.body.email });
    if (!skipassticket) return res.status(404).send('Das Ticket wurde nicht gefunden');
    res.send("Der Skipass vom Benutzer " + skipassticket.email + " wurde gel�scht");

});

router.post('/userBefoerdern', isAdmin, async (req, res) => {
    const user = await User.findOneAndUpdate({ email: req.body.email }, { isAdmin: true }, { new: true });
    if (!user) return res.status(404).send('Das Benutzer wurde nicht gefunden');
    res.send("Der Benutzer " + user.email + " wurde zum Admin bef�rdert");
});

router.post('/ticketScannen', isAdmin, async (req, res) => {
    try {
        const skipassticketid = await SkipassTicket.findById({ _id: req.body._id });
        if (!skipassticketid) {
            return res.status(404).send('Das Ticket wurde nicht gefunden');
        } else {
            res.send("Der Skipass mit der ID " + skipassticketid._id + " ist g�ltig.");
        }
    } catch (error) {
        return res.status(500).send('Ein Fehler ist aufgetreten');
    }
});

router.post('/ticketScannenZermatt', isAdmin, async (req, res) => {
    try {
        const skipassticketid = await SkipassTicket.findById({ _id: req.body._id });
        if (!skipassticketid) {
            return res.status(404).send('Das Ticket wurde nicht gefunden');
        } else {
            if (skipassticketid.AnzahlZutritteZermatterBergbahnen > 0) {
                const zermatt = await SkipassTicket.findOneAndUpdate({
                    _id: req.body._id,
                },
                    {
                        $inc: { AnzahlZutritteZermatterBergbahnen: -1 }
                    });
                const verbleibendeZutritte = zermatt.AnzahlZutritteZermatterBergbahnen - 1;
                return res.send('Die Anzahl der Zutritte wurde aktualisiert! Verbleibende Zutritte: ' + verbleibendeZutritte)
            } else {
                return res.send("Sie haben bereits alle 5 Zutritte der Zermatter Bergbahn verbraucht!")
            }
        }
    } catch (error) {
        return res.status(500).send('Ein Fehler ist aufgetreten');
    }

});
module.exports = router;