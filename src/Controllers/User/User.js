const User = require('../../Models/User');
const Employee = require('../../Models/Employee');
const {errorMessage} = require('../../../Util');

const addUser = function (req, res) {
    User.create({ fullName: req.body.fullName, position: req.body.position }).then((user) => {
        res.status(201).send(user);
    }, (err) => {
        res.status(400).json(errorMessage('wrong argument'));
    });
}
const addEmployee = function (req, res) {
    var userId = Number(req.params.id);
    Employee.create({ fullName: req.body.fullName, position: req.body.position })
}
module.exports = {
    addUser: addUser
}