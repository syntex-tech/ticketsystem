const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const index = express();
const bodyParser = require('body-parser');

index.use(cors());

/*index.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
*/

index.use(bodyParser.json());

//Import ROUTES

const ticketRoute = require('./backend-nodejs/routes/ticket');

index.use('/ticket', ticketRoute)

//ROUTES

index.get('/', (req,res) => {
    res.send('We are on home');
});


//Connect to DB

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Oberwallis:admin@cluster0np.emsr4vh.mongodb.net/?retryWrites=true&w=majority', () => console.log('Connected to DB!'));


index.listen(3000);

/*Email senden
let client = require ('@sendgrid/mail')

client.setApiKey(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)

client.send({
  to: {
    email: Email,
    Vorname: Vorname,
    Nachname: Nachname
  },
  from: {
    email: 'SkipassOberwallis@web.de',
    name: SkipassOberwallis
  },
  templateId: 'd-565d4d016cb840528edc7e24d82747e6',
  dynamicTemplateData: {
    Vorname: Vorname,
    Nachname: Nachname
  },
})
.then (() => {
  console.log("Email was sent");
});

*/