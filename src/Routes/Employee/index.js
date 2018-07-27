const {Router} = require('express');
const Employee = require('../../Controllers/Employee');
var router = Router();

router.get('/:id',Employee.getEmployee);

module.exports = router;