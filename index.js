const express = require('express');
const mongoose = require('mongoose');
const index = express();

//ROUTES

index.get('/', (req,res) => {
    res.send('We are on home');
});

//Connect to DB

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Oberwallis:admin@cluster0np.emsr4vh.mongodb.net/?retryWrites=true&w=majority', () => console.log('Connected to DB!'));


index.listen(3000);