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
/*router.post('/', async (req,res) => {
    
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
        sendEmail()
        .then(response => res.send(response.message))
        .catch(error => res.status(500).send(error.message))
    } catch(err){
        res.json({message: err });
    }*/



    /*sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))*/

    router.post('/', async (req,res) => {
        let responseSent = false;
        const skipassticket = new SkipassTicket({
            Email: req.body.Email,
            Vorname: req.body.Vorname,
            Nachname: req.body.Nachname,
            Stadt: req.body.Stadt,
            Postleitzahl: req.body.Postleitzahl,
            Strasse: req.body.Strasse,
            Hausnummer: req.body.Hausnummer,
            //id: mongoose.Types.ObjectId
        });
        try{
            const savedSkipassTicket = await skipassticket.save();
            res.json(savedSkipassTicket);
            responseSent = true;
            sendEmail()
            .then(response => {
                if (!responseSent) {
                    res.send(response.message)
                    responseSent = true;
                }
            })
            .catch(error => {
                if (!responseSent) {
                    res.status(500).send(error.message)
                    responseSent = true;
                }
            })
        } catch(err){
            if (!responseSent) {
                res.json({message: err });
                responseSent = true;
            }
        }
    

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
        + " Stadt: " + skipassticket.Postleitzahl + " " + skipassticket.Stadt + " Ticketnummer: " + skipassticket._id,
                       
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
});




//Ticket suchen

/*router.get('/:ticketId', (req, res) => {
    console.log(req.params.ticketId);
});*/

module.exports = router;