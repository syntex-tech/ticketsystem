const express = require('express');
const nodemailer = require('nodemailer');
const qr = require('qr-image');
const auth = require("../routes/validateToken");
const User = require('../model/userreg');
const SkipassTicket = require('../model/SkipassTicket');
const router = express.Router();
require('dotenv').config();


router.get('/', (req, res) => {
    res.send('Hier kannst du den Skipass kaufen!');
});



router.post('/', auth, async (req, res) => {
    let responseSent = false;
    const user = await User.findById(req.userData._id);
    const skipassticket = new SkipassTicket({
        userId: user._id,
        email: user.email,
        Vorname: user.Vorname,
        Nachname: user.Nachname,
        Stadt: user.Stadt,
        Postleitzahl: user.Postleitzahl,
        Strasse: user.Strasse,
        Hausnummer: user.Hausnummer,
    });
    const ticketId = skipassticket._id;
    const qr_svg = qr.imageSync(ticketId.toString(), { type: 'svg' });
    const qrData = Buffer.from(qr_svg).toString('base64');
    try {
        const savedSkipassTicket = await skipassticket.save();
        res.json(savedSkipassTicket);
        responseSent = true;
        sendEmail()
            .then(response => {
                if (!responseSent) {
                    res.send(response.message)
                    responseSent = true;
                }
            })
            .catch(error => {
                if (!responseSent) {
                    res.status(500).send(error.message)
                    responseSent = true;
                }
            })
    } catch (err) {
        if (!responseSent) {
            res.json({ message: err });
            responseSent = true;
        }
    }

    function sendEmail() {
        return new Promise((resolve, reject) => {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAILPASS
                }
            })

            const mail_configs = {
                from: process.env.EMAIL,
                to: skipassticket.email,
                subject: 'Ihre Bestellung wurde verarbeitet!',
                text: "Du hast den Skipass Oberwallis gekauft! Folgende Daten werden gespeichert. " +
                    "Email: " + skipassticket.email + " Name: " + skipassticket.Vorname + " "
                    + skipassticket.Nachname + " Straße: " + skipassticket.Strasse + " " + skipassticket.Hausnummer
                    + " Stadt: " + skipassticket.Postleitzahl + " " + skipassticket.Stadt + " " + skipassticket._id,
                html: `
                    <h1>Du hast den Skipass Oberwallis gekauft!</h1>
                    <p>Folgende Daten werden gespeichert:</p>
                    <ul>
                        <li>Email: ${skipassticket.email}</li>
                        <li>Name: ${skipassticket.Vorname} ${skipassticket.Nachname}</li>
                        <li>Straße: ${skipassticket.Strasse} ${skipassticket.Hausnummer}</li>
                        <li>Stadt: ${skipassticket.Postleitzahl} ${skipassticket.Stadt}</li>
                        <li>ID: ${skipassticket._id}</li>
                    </ul>
                        <img src="data:image/svg+xml;base64,${qrData}" style="width: 200px; height: 200px; alt="QR code">`
            }
            transporter.sendMail(mail_configs, function (error, info) {
                if (error) {
                    console.log(error)
                    return reject({ message: 'An Error has occured' })
                }
                return resolve({ message: "Email sent succesfully" })
            })
        })
    }
});


router.get('/ticketAnzeigen', auth, async (req, res) => {
    const userId = req.userData._id;
    const skipassticket = await SkipassTicket.findOne({ userId: userId });
    if (!skipassticket) {
        return res.status(400).send({ message: 'Bitte kaufen sie vorher ein Ticket' });
    }
    const ticketId = skipassticket._id;
    const qr_svg = qr.imageSync(ticketId.toString(), { type: 'svg' });
    res.type('svg');
    res.send(qr_svg);
});

module.exports = router;