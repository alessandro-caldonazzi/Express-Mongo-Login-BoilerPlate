var express = require('express');
var controller = require('../controller/auth.controller');
var router = express.Router();

/**
 * @api {post} auth/register Register
 * @apiDescription Register a new user
 * @apiVersion 1.0.0
 * @apiName Register
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam  {String{3..128}}          username     User's nikname
 * @apiParam  {String{6..128}}        email     User's email
 * @apiParam  {String{6..128}}  password  User's password
 *
 * @apiSuccess (Created 201) {String}  token.jwt   Authorization Token (Json Web Token)
 * @apiSuccess (Created 201) {String}  token.refreshToken  Token to get a new accessToken
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.post('/register', controller.register);

/**
 * @api {post} auth/login Login
 * @apiDescription Login user given username and password
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam  {String{3..128}}          username     User's nikname
 * @apiParam  {String{6..128}}  password  User's password
 *
 * @apiSuccess (Created 201) {String}  token.jwt   Authorization Token (Json Web Token)
 * @apiSuccess (Created 201) {String}  token.refreshToken  Token to get a new accessToken
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */
router.post('/login', controller.login);

module.exports = router;