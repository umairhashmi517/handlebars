const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

router.use(logger('dev'));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(cookieParser());
require('../config/db').connect();

router.use('/users', require('./users'));

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  next(createError(404));
});

// error handler
router.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.router.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = router;