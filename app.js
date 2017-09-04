var express = require('express');
var Sequelize = require('sequelize');

// var connect = require('connect')
    // for express, just call it with 'require('express-session').Store' 
// var SequelizeStore = require('connect-session-sequelize')(connect.session.Store);
var cookieParser = require('cookie-parser');
var session = require('express-session');

// initalize sequelize with session store 
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// create database, ensure mysql ('sqlite3') in your package.json 

var connection = new Sequelize(
'warehouse',
'root',
'Mandriva2012', {
    'dialect': 'mysql' //, 
 //   "storage": "./session.sqlite"
});

// configure express 
var app = express();
app.use(cookieParser());

app.use(session({
  secret: 'keyboard Alasha2017',
    resave: true,
    saveUninitialized: true,
  store: new SequelizeStore({
    db: connection
  }) //,
//  proxy: true // if you do SSL outside of node. 
}));
// continue as normal  
// initalize sequelize with session store 
// var SequelizeStore = require('connect-session-sequelize')(session.Store);

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
 var bcrypt = require('bcrypt');
var index = require('./routes/index');
var users = require('./routes/users');
// var birds = require('./routes/birds');
var register = require('./routes/register');
var profile = require('./routes/profile');
var users_list = require('./routes/users_list');
var user_details = require('./routes/user_details');
var login = require('./routes/login');
var logout = require('./routes/logout');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'files')));
app.use(express.static(path.join(__dirname, 'upload')));

app.use('/', index);
// app.use('/users', users);
// app.use('/birds', birds);
app.use('/register', register);
app.use('/profile', profile);
app.use('/users_list', users_list);
app.use('/user_details', user_details);
app.use('/login', login);
app.use('/logout', logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.error = {};
  console.log(err.message);
  console.log(  console.error(err.stack));
  res.status(500).send('Something broke!');

  // render the error page
  res.status(err.status || 500);
  res.render('error',{error:err.message});
});

app.listen(3000, function () {
   console.log('Example app listening on port 3000!');
 });

module.exports = app;
