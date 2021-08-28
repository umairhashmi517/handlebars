require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/',require('./routes'));
// view engine setup
module.exports = app;