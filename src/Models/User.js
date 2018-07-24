const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { db,autoIncrement } = require('../../db');

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
});
userSchema.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'id',
});
userSchema.statics.addUser = function (fullName, position) {
    this.create({ fullName: fullName, position: position });
};

module.exports = db.model('User', userSchema);