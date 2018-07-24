const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { db } = require('../../db');

const employeeSchema = Schema({
    full_name: {
        type: String
    },
    position: {
        type: Number
    },
    lat: {
        type: Number
    },
    long: {
        type: Number
    }

})

module.exports = db.model('Employee', employeeSchema);