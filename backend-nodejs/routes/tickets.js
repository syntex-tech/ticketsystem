const express = require('express');
const qr = require('qr-image');
const router = express.Router();
const auth = require("../routes/validateToken");
const SkipassTicket = require('../model/SkipassTicket');
const User = require('../model/userreg');


// Dies ist die Ticketroute ohne email, nach hinzufüggen der auth funktion zum authentifizieren des aktuellen users funktioniert die email noch nicht. 
// wollte die urpsürngliche ticketroute nicht kaputt machen werde die auth noch in die ursprüngliche route integrieren

router.get('/', (req,res) => {
    res.send('Hier kannst du den Skipass kaufen!');
});


router.post('/', auth, async (req, res) => {
    const user = await User.findById(req.userData._id);
    const skipassticket = new SkipassTicket({
        userId: user._id,
        Email: user.Email,
        Vorname: user.Vorname,
        Nachname: user.Nachname,
        Stadt: user.Stadt,
        Postleitzahl: user.Postleitzahl,
        Strasse: user.Strasse,
        Hausnummer: user.Hausnummer,
    });
    skipassticket.save()
        .then(() => {
            res.send('Der Kauf war erfolgreich!' + skipassticket);
        })
        .catch(err => {
            if (err) {
                res.send('Der Kauf war nicht erfolgreich!');
            }
        });
});

router.get('/ticketAnzeigen', auth, async (req, res) => {
    const userId = req.userData._id;
    const skipassticket = await SkipassTicket.findOne({ userId: userId });
    const ticketId = skipassticket._id;
    const zermatt = skipassticket.AnzahlZutritteZermatterBergbahnen;
    if (!ticketId) {
        return res.status(400).send({ message: 'Bitte kaufen sie vorher ein Ticket' });
    }
    const qr_svg = qr.imageSync(ticketId.toString(), { type: 'svg' });
    res.type('svg');
    res.send(qr_svg);

});

module.exports = router;