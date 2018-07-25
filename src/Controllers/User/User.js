const User = require('../../Models/User');
const Employee = require('../../Models/Employee');
const { errorMessage } = require('../../../Util');

const addUser = function (req, res) {
    User.create({ fullName: req.body.fullName, position: req.body.position }).then((user) => {
        res.status(201).json({
            id: user.id
        });
    }, (err) => {
        res.status(400).json(errorMessage('wrong argument'));
    });
}
const addEmployee = function (req, res) {
    var userId = Number(req.params.id);
    Employee.create({ fullName: req.body.fullName, position: req.body.position }).then((employee) => {
        User.findOneAndUpdate({ id: userId }, {
            $push: {
                member: employee.id
            }
        }).then((user) => {
            res.sendStatus(201).json({ id: employee.id });
        }, (err) => {
            res.sendStatus(400).json(errorMessage('bad argument'));
        });
    }, (err) => {
        res.sendStatus(400).json(errorMessage('bad argument'));
    });
}
module.exports = {
    addUser: addUser,
    addEmployee: addEmployee
}