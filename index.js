const express = require('express');

const index = express();

//ROUTES

index.get('/', (req,res) => {
    res.send('We are on home');
});

index.listen(3000);