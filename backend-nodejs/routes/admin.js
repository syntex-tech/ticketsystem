const express = require('express');
const router = express.Router();
const isAdmin = require("../routes/validateAdmin");
const User = require('../model/userreg');
const SkipassTicket = require('../model/SkipassTicket');
require('dotenv').config();


/* GET admin listing. */
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
    res.send("Der Skipass vom Benutzer " + skipassticket.email + " wurde gelöscht");

});

router.post('/userBefoerdern', isAdmin, async (req, res) => {
    const user = await User.findOneAndUpdate({ email: req.body.email}, { isAdmin: true }, { new: true });
    if (!user) return res.status(404).send('Das Benutzer wurde nicht gefunden');
    res.send("Der Benutzer " + user.email + " wurde zum Admin befördert");
});

router.post('/ticketScannen', isAdmin, async (req, res) => {
    try {
        const skipassticketid = await SkipassTicket.findById({ _id: req.body._id });
        if (!skipassticketid) {
            return res.status(404).send('Das Ticket wurde nicht gefunden');
        } else {
            res.send("Der Skipass mit der ID " + skipassticketid._id + " ist gültig.");
        }
    } catch (error) {
        return res.status(500).send('Ein Fehler ist aufgetreten');
    }
});
/*
router.post('/ticketScannenZermatt', isAdmin, async (req, res) => {
    res.contentType('application/json');
    res.type('json');

    //Checking if the id exist
    const AnzahlZutritte = await SkipassTicket.findOne({
        _id: req.body._id,
    }
    );
    if (!SkipassTicket) {
        res.status(400);
        return res.send({
            message: 'Ticket not found'
        });
    }
    //if statement muss noch gemacht werden Die Zahl 5 wird noch nicht erkannt und das System denkt, dass es kleiner ist als 

    if (AnzahlZutritte.AnzahlZutritteZermatterBergbahnen > 0) {
        const AnzahlZutritteZermatterBergbahnen2 = await SkipassTicket.findOneAndUpdate({
            _id: req.body._id,
        },
            {
                $inc: { AnzahlZutritteZermatterBergbahnen: -1 }
            });
        return res.send({
            message: 'Die Anzahl der Zutritte wurde aktualisiert!'
        })
    } else {
        return res.send({
            message: "Sie haben bereits alle 5 Zutritte der Bergbahn verbraucht!"
        })
    }
});*/
module.exports = router;