const User = require('../models/user.model');
const APIError = require('../utils/apiError');
const mongoose = require('mongoose');
const session = require('session-jwt');
const ResetTokenPassword = require('../models/resetTokenPassword.model');
const emailProvider = require('../services/email/emailProvider');
const httpStatus = require('http-status');

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
        const { jwt, refreshToken } = await session.newSession({ "_id": saved._id, username, email }, "user");

        res.status(200).json({ jwt, refreshToken });
    } catch (err) {
        next(User.checkForDuplicateEmail(err));
    }
};

exports.login = async(req, res, next) => {
    try {
        let { username, password } = req.body;
        const user = await User.findUser(username, password);

        const { jwt, refreshToken } = await session.newSession({
            "_id": user._id,
            "username": user.username,
            "email": user.email
        }, "user");

        res.status(200).json({ jwt, refreshToken });
    } catch (err) {
        next(err);
    }
};

exports.refresh = async(req, res, next) => {
    try {
        const refreshToken = req.body.refreshToken;
        const jwt = await session.refresh(refreshToken);
        res.status(200).json({ jwt });
    } catch (err) {
        next(err);
    }
};

exports.resetTokenPassword = async(req, res, next) => {
    try {
        const email = req.body.email;
        const user = await User.findOne({ email }).exec();

        if (user) {
            const token = await ResetTokenPassword.generate(user);
            emailProvider.sendPasswordReset(token, email);
            res.status(httpStatus.OK);
            return res.json('success');
        }
        throw new APIError({
            status: httpStatus.UNAUTHORIZED,
            message: 'Invalid email',
        });
    } catch (err) {
        next(err);
    }
};