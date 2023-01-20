const express = require('express');
const app = express();
const router = express.Router();


router.get('/', (req,res) => {
    res.send('Hier werden die Zutritte der Zermatter Bergbahn gezählt');
});













module.exports = router;