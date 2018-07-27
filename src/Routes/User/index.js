const { Router } = require('express');
const router = Router();
const User = require('../../Controllers/User');
router.get('/',User.getUsers);
router.get('/:id',User.getUser);
router.post('/addUser', User.addUser);
router.post('/:id/addEmployee',User.addEmployee);
module.exports = router;