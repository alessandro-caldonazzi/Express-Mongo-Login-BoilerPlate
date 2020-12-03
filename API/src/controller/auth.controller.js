const User = require('../models/user.model');
const APIError = require('../utils/apiError');
const mongoose = require('mongoose');
exports.register = async(req, res, next) => {
    try {
        let { username, password, email } = req.body;
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            password,
            email
        });

        let a = await user.save();
        console.log(a);
    } catch (err) {
        next(User.checkForDuplicateEmail(err));
    }
};