const jwt = require("jsonwebtoken");
const User = require('../model/userreg');

require('dotenv').config();

const isAdmin = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(403).send("Sie müssen sich anmelden!");
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.userData = decoded;
    } catch (err) {
        return res.status(401).send("Ihr Sitzung ist abgelaufen");
    }

    const admin = req.userData;
    const user = await User.findById(admin._id);
    if (!user.isAdmin)
        return res.status(401).send({ msg: "Sie haben auf diesen bereich keinen zugriff!" });
    return next();
};

module.exports = isAdmin;