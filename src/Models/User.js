const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { db, autoIncrement } = require('../../db');

const userSchema = Schema({
    id: {
        type: Number,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    members:[{
        type:Number,
        // unique:true,
    }]
});
userSchema.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'id',
});


module.exports = db.model('User', userSchema);