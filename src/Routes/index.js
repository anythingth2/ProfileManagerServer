const { Router } = require('express');
const Home = require('./Home');
const User = require('./User');


const api = Router();
api.use('/home',Home);
api.use('/user',User);

module.exports = api;