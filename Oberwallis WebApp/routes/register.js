'use strict';
var express = require('express');
var router = express.Router();
var User = require('../models/userreg');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with register');
});


router.post("/registerUser", (req, res) => {
    var user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    user.save()
        .then(() => {
            res.render('index', { title: 'Registrierung erfolgreich' });
        })
        .catch(err => {
            if (err.code === 11000) {
                res.render('index', { title: 'Diese E-Mail exisitiert bereits' });
            }
        });
    
});


router.post('/login', async (req, res) => {
    try {
        var user = await User.findOne({ email: req.body.email });

        if (!user) return res.status(400).send('Diese E-Mail existiert nicht');

        var validPassword = await bcrypt.compare(req.body.password, user.password);

        if (!validPassword) return res.status(400).send('Das Passwort ist falsch');

        var token = jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET);

        res.render('main', { title: 'Sie sind eingeloggt', token: token});

    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;