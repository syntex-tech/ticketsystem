const express = require('express');
const app = express();
const router = express.Router();
const SkipassTicket = require('../model/SkipassTicket');
const nodemailer = require('nodemailer');
const { default: mongoose } = require('mongoose');

router.get('/', (req,res) => {
    res.send('Hier kannst du den Skipass kaufen!');
});

//Erstellung des SkipassTicket
router.post('/', async (req,res) => {
    
    const skipassticket = new SkipassTicket({
        Email: req.body.Email,
        Vorname: req.body.Vorname,
        Nachname: req.body.Nachname,
        Stadt: req.body.Stadt,
        Postleitzahl: req.body.Postleitzahl,
        Strasse: req.body.Strasse,
        Hausnummer: req.body.Hausnummer,
        id: mongoose.Types.ObjectId
    });
    try{
        const savedSkipassTicket = await skipassticket.save();
        res.json(savedSkipassTicket);
    } catch(err){
        res.json({message: err });
    }



    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))

    
});

function sendEmail(){

    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'SkipassOberwallis@gmail.com',
                pass:'zcjqbimzneltkmxx'
            }
        })
  
    const mail_configs ={
        from:'SkipassOberwallis@gmail.com',
        to: skipassticket.Email,
        subject:'Ihre Bestellung wurde verarbeitet!',
        text: "Du hast den Skipass Oberwallis gekauft! Folgende Daten werden gespeichert. " + 
        "Email: " + skipassticket.Email +  " Name: " + skipassticket.Vorname + " " 
        + skipassticket.Nachname + " Straße: " + skipassticket.Strasse + " " + skipassticket.Hausnummer 
        + " Stadt: " + skipassticket.Postleitzahl + " " + skipassticket.Stadt + " Ticketnummer: " + skipassticket.id,
                       
    }
    transporter.sendMail(mail_configs, function(error, info){
        if(error){
            console.log(error)
            return reject({message: 'An Error has occured'})
        }
        return resolve({message:"Email sent succesfully"})
    })
    })
  }

//Ticket suchen

/*router.get('/:ticketId', (req, res) => {
    console.log(req.params.ticketId);
});*/

module.exports = router;