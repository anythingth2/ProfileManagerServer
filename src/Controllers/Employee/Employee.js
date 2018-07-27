const {errorMessage} = require('../../../Util');
const Employee = require('../../Models/Employee');

const getEmployee = async function (req, res) {
    var employeeId = Number(req.params.id);
    var employee = await Employee.findOne({ id: employeeId }).exec();
    if(employee!=null)
        res.status(200).json(employee);
    else
        res.status(404).json(errorMessage('id not found'));

}


module.exports = {
    getEmployee:getEmployee
}