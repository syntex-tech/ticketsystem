const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require("../routes/validateToken");
const User = require('../model/userreg');
require('dotenv').config();
const router = express.Router();


/* GET users listing. */
router.get('/', function (req, res) {
    res.send('Hier ist Register');
});


router.post('/registerUser', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        Vorname: req.body.Vorname,
        Nachname: req.body.Nachname,
        Stadt: req.body.Stadt,
        Postleitzahl: req.body.Postleitzahl,
        Strasse: req.body.Strasse,
        Hausnummer: req.body.Hausnummer,
    });
    user.save()
        .then(() => {
            res.send('Die Registrierung war erfolgreich!');
        })
        .catch(err => {
            if (err.code === 11000) {
                res.send('Diese E-Mail exisitiert bereits!');
            }
        });
});


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) return res.status(400).send('Diese E-Mail existiert nicht');

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) return res.status(400).send('Das Passwort ist falsch');

        const token = jwt.sign({
            _id: user._id
        }, process.env.SECRET, {
            expiresIn: 1800
        });

        res.cookie('token', token);
        //Token wird über res.send an frontend geschickt.
        res.send(token);

    } catch (err) {
        res.status(400).send(err);
    }
});


router.get('/profilAnzeigen', auth, async (req, res) => {
    const user = await User.findById(req.userData._id);
    res.send({
        email: user.email,
        Vorname: user.Vorname,
        Nachname: user.Nachname,
        Stadt: user.Stadt,
        Postleitzahl: user.Postleitzahl,
        Strasse: user.Strasse,
        Hausnummer: user.Hausnummer,
    });
});


router.post("/logout", auth, (req, res) => {
    res.clearCookie("token");
    res.send("Sie wurden ausgeloggt!");
});

module.exports = router;