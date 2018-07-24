const { Router } = require('express');
const router = Router();
const User = require('../../Controllers/User');

router.post('/addUser', User.addUser);
router.post('/:id/')
module.exports = router;