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
const ZermatterBergbahnRoute = require ('./backend-nodejs/routes/ZermatterBergbahn')

index.use('/ZermatterBergbahn', ZermatterBergbahnRoute)
index.use('/ticket', ticketRoute)

//ROUTES

index.get('/', (req,res) => {
    res.send('We are on home');
});



//Connect to DB

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Oberwallis:admin@cluster0np.emsr4vh.mongodb.net/?retryWrites=true&w=majority', () => console.log('Connected to DB!'));


index.listen(3000);

