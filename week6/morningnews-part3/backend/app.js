require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const usersRouter = require('./routes/users')
require(`./models/connection`);
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

const cors = require('cors');
const { cp } = require('fs');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/', indexRouter);


module.exports = app;
