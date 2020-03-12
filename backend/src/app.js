const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(require('./routes/users.routes'));

module.exports = app;