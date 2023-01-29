const express = require('express');
const router = express.Router();
const auth = require("../routes/validateToken");
const Ticket = require('../model/ticket');
const User = require('../model/userreg');

// Dies ist die Ticketroute ohne email, nach hinzufüggen der auth funktion zum authentifizieren des aktuellen users funktioniert die email noch nicht. 
// wollte die urpsürngliche ticketroute nicht kaputt machen werde die auth noch in die ursprüngliche route integrieren

router.get('/', (req,res) => {
    res.send('Hier kannst du den Skipass kaufen!');
});


router.post('/', auth, async (req, res) => {
    const user = await User.findById(req.userData._id);
    const ticket = new Ticket({
        userId: user._id,
        Email: user.Email,
        Vorname: user.Vorname,
        Nachname: user.Nachname,
        Stadt: user.Stadt,
        Postleitzahl: user.Postleitzahl,
        Strasse: user.Strasse,
        Hausnummer: user.Hausnummer,
    });
    ticket.save()
        .then(() => {
            res.send('Der Kauf war erfolgreich!' + ticket);
        })
        .catch(err => {
            if (err.code === 11000) {
                res.send('Der Kauf war nicht erfolgreich!');
            }
        });
});

module.exports = router;