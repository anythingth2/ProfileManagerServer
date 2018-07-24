const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const api = require('./src/Routes');
const util = require('util')


app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(req.method + ' -> ' + req.path + ': ' + util.inspect(req.body));
    next();
});


app.use('/api', api);

port = 8000;
app.listen(port, () => {
    console.log('server listen at ' + port);
});
