const express = require('express');
const router = express.Router();
const auth = require("../routes/validateToken");
const User = require('../model/userreg');



router.get('/', auth, async (req, res) => {
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


module.exports = router;