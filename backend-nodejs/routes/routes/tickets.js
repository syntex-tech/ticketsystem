const express = require('express');
const router = express.Router();
const 'Ticket' = require('../model/SkipassTicket');

router.get('/tickets', (req,res) => {
    res.send('Hier kannst du den Skipass kaufen!');
});

router.post('/tickets', (req,res) => {
    console.log(req.body);
});


module.exports = router;