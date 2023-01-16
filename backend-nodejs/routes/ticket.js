const express = require('express');
const app = express();
const router = express.Router();
const SkipassTicket = require('../model/SkipassTicket');

router.get('/', (req,res) => {
    res.send('Hier kannst du den Skipass kaufen!');
});

//Erstellung des SkipassTicket
router.post('/', async (req,res) => {
    const skipassticket = new SkipassTicket({
        Vorname: req.body.Vorname,
        Nachname: req.body.Nachname,
        Stadt: req.body.Stadt,
        Postleitzahl: req.body.Postleitzahl,
        Strasse: req.body.Strasse,
        Hausnummer: req.body.Hausnummer
    });
    try{
        const savedSkipassTicket = await skipassticket.save();
        res.json(savedSkipassTicket);
    } catch(err){
        res.json({message: err });
    }
});
app.use('/', router);

//Ticket suchen

/*router.get('/:ticketId', (req, res) => {
    console.log(req.params.ticketId);
});*/

module.exports = router;