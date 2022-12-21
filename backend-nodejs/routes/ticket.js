const express = require('express');
const router = express.Router();
//const 'Ticket' = require('../model/SkipassTicket');

router.get('/', (req,res) => {
    res.send('Hier kannst du den Skipass kaufen!');
});

router.post('/', (req,res) => {
    console.log(req.body);
});


module.exports = router;