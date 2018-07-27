const { Router } = require('express');
const Home = require('./Home');
const Employee  = require('./Employee');
const User = require('./User');

const api = Router();
api.use('/home',Home);
api.use('/employee',Employee);
api.use('/user',User);

module.exports = api;