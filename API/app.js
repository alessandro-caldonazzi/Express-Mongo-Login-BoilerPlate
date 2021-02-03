const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const httpStatus = require('http-status');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const authRouter = require('./src/routes/auth');
const env = process.env.NODE_ENV || 'developent';
const helmet = require('helmet');

const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.D_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:27017/Platform?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, function(err) {
    if (err) throw err;
});

const session = require('session-jwt');
session.settings(process.env.JWT_SECRET);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(helmet());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log("funzione errore in app.js");
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    const response = {
        code: err.status || 400,
        message: err.message || httpStatus[response.code],
        errors: err.errors,
        stack: err.stack,
    };

    if (env !== 'development') {
        delete response.stack;
    }

    res.status(response.code);
    res.json(response);
});

module.exports = app;