const { Router } = require('express');

const Home = require('../../Controllers/Home');
const router = Router();

router.get('/home_page/:id', Home.home_page);


module.exports = router;