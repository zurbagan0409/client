var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var db = require('../models/dbs.js');
var database = new db('localhost', 'root', 'admin', 'warehouses');
var sess;
var bcrypt = require('bcrypt');
// var app.use(express.bodyParser());
var session = require('express-session');
// var session = require('session-store');
// initalize sequelize with session store dd
var SequelizeStore = require('connect-session-sequelize')(session.Store);

 var connection = new Sequelize('warehouse', 'root', '',{
 dialect: 'mysql'
 });
var us1;
var sess;
connection.sync();

router.get('/', (req,res,next) => {
//  res.render('index', { title: 'Express' });
 	 res.render('login', { title: 'Express', firstname: 'Askar', lastname: 'Bazayev', email: 'As@mk.com'});
});

router.post('/', (req,res,next) => {
//var myHash = bcrypt.hash('myPassword', 10, function(err, hash) {
//       return hash;
//    });
// Generate a salt
var salt = bcrypt.genSaltSync(10);
// Hash the password with the salt
var hash = bcrypt.hashSync(req.body.password, salt);
// Finally just store the hash in your DB
// .. code to store in Redis/Mongo/Mysql/Sqlite/Postgres/etc	
var users1 = database.Users.findOne({
  where: { // SELECT * FROM users WHERE email: req.body.email
    email: req.body.email
  }
}).then(function(user) {	  //post
 var foundFirstName;
 var email;
 	foundFirstName = user.firstname;
 	email = user.email;
  var hash = user.password;
 console.log('found users');
  console.log(hash);
  if (bcrypt.compareSync(req.body.password, hash)){
  	sess = req.session;
  	sess.email = user.email;
  	sess.firstname = user.firstname;
  	sess.lastname = user.lastname;
  	res.redirect('/');
 // 	res.render('index', {title: 'Express'}); // ; // true
 return;
  }
  else
    res.render('error', { error: Error});
 return; 
   console.log('firstname:');
   console.log(user.firstname);
 

console.log(foundFirstName);
  	 res.render('login', { title: 'Express', firstname: foundFirstName, lastname: 'bazayev', email: email});

 	
  });  //then int 2
  });  //post

 
module.exports = router;
