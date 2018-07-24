const { Router } = require('express');

const { home_page } = require('../../Controllers/Home');
const router = Router();


router.get('/home_page/:id', home_page);

module.exports = router;