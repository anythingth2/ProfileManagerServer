const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost');
console.log('connect mongodb')
const autoIncrement = require('mongoose-auto-increment');


autoIncrement.initialize(db);
module.exports = {
    db: db,
    autoIncrement: autoIncrement
}