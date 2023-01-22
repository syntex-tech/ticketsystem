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
        _id: req.body.ids,
    });
    if(!SkipassTicket) {
        res.status(400);
        return res.send({
            message: 'Ticket not found'
        });
    }
    //if statement muss noch gemacht werden Die Zahl 5 wird noch nicht erkannt und das System denkt, dass es kleiner ist als 0
    if(AnzahlZutritteZermatterBergbahnen > 0) {
    const AnzahlZutritteZermatterBergbahnen2 = await SkipassTicket.findOneAndUpdate({
        _id: req.body.ids,
    },
    {
        $inc: {AnzahlZutritteZermatterBergbahnen: -1}
    });
    return res.send({
        message: 'Die Anzahl der Zutritte wurde aktualisiert!'
    })
}else {
    return res.send({
        message: "Sie haben bereits alle 5 Zutritte der Bergbahn verbraucht!"
    })
  }
});

module.exports = router;