const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const APIError = require('../utils/apiError');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    email: {
        type: String,
        unique: true,
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
    },

    module.exports = mongoose.model('User', userSchema);