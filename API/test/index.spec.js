const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');
const mongoose = require('mongoose');

chai.use(chaiHttp);
chai.should();
let should = chai.should();

//connect to mongoDb and drop collections
mongoose.connect(`mongodb://${process.env.D_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:27017/Platform?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }, function(err) {
    if (err) throw err;
});

mongoose.connection.collections['users'].drop();
mongoose.connection.collections['resettokenpasswords'].drop();

describe('test', () => {
    let jwt, refreshToken;
    step('registro utente valido', async(done) => {
        chai.request(server)
            .post('/auth/register')
            .send({ 'email': 'email@example.com', 'password': 'password', 'username': 'username' })
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property('jwt');
                res.body.should.have.property('refreshToken');
                jwt = res.body.jwt;
                refreshToken = res.body.refreshToken;
                done();
            });
    });
    step('login valido', async(done) => {
        chai.request(server)
            .post('/auth/login')
            .send({
                "username": "username",
                "password": "password"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('jwt');
                res.body.should.have.property('refreshToken');
                done();
            });
    });
    step('refresh', async(done) => {
        chai.request(server)
            .post('/auth/refresh')
            .send({
                "refreshToken": refreshToken
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('jwt');
                done();
            });
    });
});