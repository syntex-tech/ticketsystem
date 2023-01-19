'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with skipass');
});


router.post("/buyPass", (req, res) => {
    res.render('yes', { title: 'Skipass Kaufen geklickt' });
})

router.get("/showPass", (req, res) => {
    res.render('main', { title: 'Ihr Skipass' });
})


module.exports = router;