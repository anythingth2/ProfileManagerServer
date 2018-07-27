const { errorMessage } = require('../../../Util');
const Employee = require('../../Models/Employee');
const Position = require('../../Models/Position');

const getEmployee = async function (req, res) {
    var employeeId = Number(req.params.id);
    var employee = await (Employee.findOne({ id: employeeId }).lean().exec());
    employee.position = (await Position.findOne({ id: employee.position }).exec()).name;

    if (employee != null)
        res.status(200).json(employee);
    else
        res.status(404).json(errorMessage('id not found'));
}


module.exports = {
    getEmployee: getEmployee
}