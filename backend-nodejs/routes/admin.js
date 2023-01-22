const express = require('express');
const router = express.Router();
const Admin = require('../model/adminLogin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();



/* GET admin listing. */
router.get('/', function (req, res) {
    res.send('Hier ist Register');
});


router.post("/registerAdmin", async (req, res) => {
    const admin = new Admin({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    admin.save()
        .then(() => {
            res.send('Die Registrierung war erfolgreich');
        })
        .catch(err => {
            if (err.code === 11000) {
                res.send('Diese E-Mail exisitiert bereits');
            }
        });
});

router.post("/loginAdmin", async (req, res) => {
    try {
        const admin = await Admin.findOne({ email: req.body.email });

        if (!admin) return res.status(400).send('Diese E-Mail existiert nicht');

        const validPassword = await bcrypt.compare(req.body.password, admin.password);

        if (!validPassword) return res.status(400).send('Das Passwort ist falsch');

        const token = jwt.sign({ _id: admin._id, email: admin.email }, process.env.SECRET);

        res.send('Sie sind eingeloggt! Token: ' + token);

    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;