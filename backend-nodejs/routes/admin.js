const express = require('express');
const router = express.Router();
const isAdmin = require("../routes/validateAdmin");
const User = require('../model/userreg');
const SkipassTicket = require('../model/SkipassTicket');
require('dotenv').config();



/* GET admin listing. */
router.get('/', isAdmin, async (req, res) => {
    res.send('Hier ist der Adminbereich');
});

router.get('/ticketLöschen', isAdmin, async (req, res) => {
    res.send('Hier ist die route um tickets zu löschen');

});

router.get('/userBefördern', isAdmin, async (req, res) => {
    res.send('Hier ist die route um user zum Admin zu machen');
});

router.get('/ticketScannen', isAdmin, async (req, res) => {
    res.send('Hier ist die route um ein Ticket zu scannen und auf gültigkeit zu überprüfen');
});

module.exports = router;