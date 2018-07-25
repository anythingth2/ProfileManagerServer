const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { db, autoIncrement } = require('../../db');

const positionSchema = Schema({
    id: {
        type: Number,
        unique: true
    },
    name: {
        type: String,
        unique: true,
    }
});
positionSchema.statics.getPosition = function (id) {
    return this.findOne({id:id}).exec();
}
positionSchema.plugin(autoIncrement.plugin, {
    model: 'Position',
    field: 'id',
});

module.exports = db.model('Position', positionSchema);