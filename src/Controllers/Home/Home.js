const User = require('../../Models/User');
const Position = require('../../Models/Position');
const Employee = require('../../Models/Employee');
const { errorMessage } = require('../../../Util');
const home_page = function (req, res) {
    let userId = Number(req.params.id);

    User.findOne({ id: userId }).exec(function (err, user) {
        if (err) {
            res.status(404).json(errorMessage('id not found.'));
            return;
        }
        Position.findOne({ id: user.position }).exec(function (err, position) {
            if (err) {
                res.status(404).json(errorMessage('wrong position'));
                return;
            }
            Employee.find({ id: user.members }).exec(function (err, employeese) {
                if (err) {
                    res.status(404).json(errorMessage('wrong position'));
                    return;
                }
                Promise.all(employeese.map(async (employee) => {
                    return { 
                        fullName:employee.fullName,
                        position: (await Position.getPosition(employee.position)).name 
                    };
                })).then((employeese) => {
                    res.status(200).json({
                        fullName: user.fullName,
                        position: position.name,
                        members: employeese
                    });
                });
            });
        }
        );
    });
};

module.exports = {
    home_page: home_page
}