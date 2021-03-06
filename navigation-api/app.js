var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

app.use(cors({ 
  "origin": "*",
  "methods": "*",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
 }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Add headers

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function (err, req, res, next) {
//     res.status(err.code || 500)
//       .json({
//         status: 'error',
//         message: err
//       });
//   });
// }

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
    .json({
      status: 'error',
      message: err.message
    });
});

module.exports = app;
