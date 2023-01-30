const express = require('express');
const router = express.Router();
const isAdmin = require("../routes/validateAdmin");
require('dotenv').config();



/* GET admin listing. */
router.get('/', function (req, res) {
    res.send('Hier ist Register');
});

router.get('/adminTest', isAdmin, async (req, res) => {
    // Admin-only logic here
    res.send("Welcome, Admin!")
});

module.exports = router;