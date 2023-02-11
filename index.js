const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const index = express();
require('dotenv/config');


index.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true
}));


/*index.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
*/

index.use(bodyParser.json());

//Import ROUTES
const ticketRoute = require('./backend-nodejs/routes/ticket');
const userRoute = require('./backend-nodejs/routes/user');
const auth = require("./backend-nodejs/routes/validateToken");
const adminAuth = require("./backend-nodejs/routes/validateAdmin");
const admin = require("./backend-nodejs/routes/admin");

index.use(cookieParser());
index.use('/ticket', ticketRoute);
index.use('/user', userRoute);
index.use('/validateToken', auth);
index.use('/validateAdmin', adminAuth);
index.use('/admin', admin);

//ROUTES

index.get('/', (req, res) => {
    res.send('We are on home');
});



//Connect to DB

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to DB!'));


// Error Handler
// catch 404 and forward to error handler
index.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (index.get('env') === 'development') {
    index.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
index.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


index.listen(process.env.PORT);
