const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(403).send("A token is required for authentication " + token);
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userData = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token " + token);
    }
    return next();
};

module.exports = verifyToken;