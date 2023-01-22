const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const index = express();
const bodyParser = require('body-parser');
require('dotenv/config');

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
const ZermatterBergbahnRoute = require('./backend-nodejs/routes/ZermatterBergbahn');
const userRoute = require('./backend-nodejs/routes/register');
const adminRoute = require('./backend-nodejs/routes/admin');

index.use('/ZermatterBergbahn', ZermatterBergbahnRoute);
index.use('/ticket', ticketRoute);
index.use('/register', userRoute);
index.use('/admin', adminRoute);

//ROUTES

index.get('/', (req,res) => {
    res.send('We are on home');
});



//Connect to DB

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to DB!'));


index.listen(3000);