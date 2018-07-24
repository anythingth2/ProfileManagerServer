const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const api = require('./src/Routes');
const util = require('util');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));


app.use('/api', api);

port = 8000;
app.listen(port, () => {
    console.log('server listen at ' + port);
});
