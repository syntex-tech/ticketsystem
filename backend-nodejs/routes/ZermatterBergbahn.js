const express = require('express');
const app = express();
const router = express.Router();
const SkipassTicket = require('../model/SkipassTicket');
const { default: mongoose } = require('mongoose');


router.get('/', (req,res) => {
    res.send('Hier werden die Zutritte der Zermatter Bergbahn gezählt');
});


router.post('/', async (req, res) => {
    res.contentType('application/json');
    res.type('json');
      
    //Checking if the id exist
    const AnzahlZutritteZermatterBergbahnen = await SkipassTicket.findOne({
        id: req.body.ids,
    });
    if(!SkipassTicket) {
        res.status(400);
        return res.send({
            message: 'Ticket not found'
        });
    }

    const AnzahlZutritteZermatterBergbahnen2 = await SkipassTicket.findOneAndUpdate({
        id: req.body.ids,
    },
    {
        AnzahlZutritteZermatterBergbahnen: req.body.id
    });

    res.send({
        message: 'Ticket aktualisiert'
    });
});









module.exports = router;