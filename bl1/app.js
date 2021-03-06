var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/bl1');

var routes = require('./routes/index');
var users = require('./routes/use');
var blend = require('./routes/blend');
var part = require('./routes/part');
var mat = require('./routes/mat');
var prim = require('./routes/prim');
var tweet = require('./routes/tweet');
var addpost = require('./routes/add');
var delpost = require('./routes/del');
var updatepost = require('./routes/update');
var art = require('./routes/article');
 var artpost = require('./routes/artpost');
 var artget = require('./routes/artget');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/users', users);
app.use('/blender', blend);
app.use('/particle', part);
app.use('/', mat);
app.use('/primitive', prim);
app.use('/', tweet);
app.use('/', addpost);
app.use('/', delpost);
app.use('/', updatepost);
app.use('/', art);
 app.use('/', artpost);
 app.use('/', artget);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
