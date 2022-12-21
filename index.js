const express = require('express');
const mongoose = require('mongoose');
const index = express();

//Import ROUTES

const ticketRoute = require('./backend-nodejs/routes/ticket');

index.use('/tickets', ticketRoute)

//ROUTES

index.get('/', (req,res) => {
    res.send('We are on home');
});

index.get('/tickets', (req,res) => {
    res.send('Hier kannst du den Skipass kaufen!');
    console.log(req.body);
});


//Connect to DB

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Oberwallis:admin@cluster0np.emsr4vh.mongodb.net/?retryWrites=true&w=majority', () => console.log('Connected to DB!'));


index.listen(3000);