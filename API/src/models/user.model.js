const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const APIError = require('../utils/apiError');
const httpStatus = require('http-status');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    }
});

userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) return next();

        const hash = await bcrypt.hash(this.password, 15);
        this.password = hash;

        return next();
    } catch (error) {
        return next(error);
    }
});

userSchema.method({
    async checkPassword(password) {
        return bcrypt.compare(password, this.password);
    }
});

userSchema.statics.checkForDuplicateEmail = (error) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        //check for duplicate key error
        return new APIError({
            message: 'Validation Error',
            errors: [{
                field: 'email',
                location: 'body',
                messages: ['email already exists'],
            }],
            status: 409,
            isPublic: true,
            stack: error.stack,
        });
    }
    return error;
};

userSchema.statics.findUser = async function(username, password) {
    const err = {
        status: httpStatus.UNAUTHORIZED,
        isPublic: true,
    };
    if (!username) throw new APIError({...err, message: 'A username is required' });
    if (!password) throw new APIError({...err, message: 'A password is required' });
    const user = await this.findOne({ username }).exec();
    if (!user || !await user.checkPassword(password)) throw new APIError({...err, message: 'Incorrect username or password' });
    return user;
};


module.exports = mongoose.model('User', userSchema);