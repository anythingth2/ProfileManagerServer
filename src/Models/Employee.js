const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { db,autoIncrement } = require('../../db');

const employeeSchema = Schema({
    id:{
        type:Number,
        unique:true
    },
    fullName: {
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

employeeSchema.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'id',
});

module.exports = db.model('Employee', employeeSchema);