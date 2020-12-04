const User = require('../models/user.model');
const APIError = require('../utils/apiError');
const mongoose = require('mongoose');
const session = require('session-jwt');

exports.register = async(req, res, next) => {
    try {
        let { username, password, email } = req.body;
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            password,
            email
        });

        const saved = await user.save();
        const { jwtToken, refreshToken } = await session.newSession({ "_id": saved._id, username, email }, "user");

        res.status(200).json({ jwtToken, refreshToken });
    } catch (err) {
        next(User.checkForDuplicateEmail(err));
    }
};

exports.login = async(req, res, next) => {
    try {
        let { username, password } = req.body;
        const user = await User.findUser(username, password);

        const { jwtToken, refreshToken } = await session.newSession({
            "_id": user._id,
            "username": user.username,
            "email": user.email
        }, "user");

        res.status(200).json({ jwtToken, refreshToken });
    } catch (err) {
        next(err);
    }
};