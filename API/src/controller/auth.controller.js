const User = require('../models/user.model');
const mongoose = require('mongoose');
exports.register = async(req, res, next) => {
    let { username, password, email } = req.body;
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password,
        email
    });


    user.save().then(result => {
        console.log(result);
        res.json({ "ok": true, "data": user });
    }).catch(err => console.log(err));
};