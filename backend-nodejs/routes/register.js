const express = require('express');
const router = express.Router();
const User = require('../model/userreg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();



/* GET users listing. */
router.get('/', function (req, res) {
    res.send('Hier ist Register');
});


router.post("/registerUser", async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    user.save()
        .then(() => {
            res.send('Die Registrierung war erfolgreich');
        })
        .catch(err => {
            if (err.code === 11000) {
                res.send('Diese E-Mail exisitiert bereits');
            }
        });
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) return res.status(400).send('Diese E-Mail existiert nicht');

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) return res.status(400).send('Das Passwort ist falsch');

        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET);

        res.send('Sie sind eingeloggt', token);

    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;