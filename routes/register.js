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

 var connection = new Sequelize('warehouses', 'root', 'admin',{
 dialect: 'mysql'
 });

var us1;
connection.sync();
router.get('/', (req,res,next) => {
 	 res.render('register', { title: 'Express', firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email});
});

router.post('/', (req,res,next) => {
if (req.body.password !== req.body.confirmedPassword){
	console.log('Пароль и его подnверждение не совпадают');
	console.log(req.body.password);
	console.log(req.body.confirmedPassword);
//	res.send('Пароль и его подверждение не совпадают');
}
/*
    if(req.session.email){
        res.redirect('/profile');
    }else{
    database.createUser(req, res)};
*/

// Generate a salt
var salt = bcrypt.genSaltSync(10);
// Hash the password with the salt
var hash = bcrypt.hashSync(req.body.password, salt);
 
// Finally just store the hash in your DB
// .. code to store in Redis/Mongo/Mysql/Sqlite/Postgres/etc	
    console.log(hash);

var users = database.Users.create({ 

 lastname: req.body.lastname,
 firstname: req.body.firstname,
 email: req.body.email,
 password: hash 
 }).then(function(users2) {	  //post
// console.log('Over here');
// console.log(bcrypt.compareSync("my password", hash)); // true
// console.log(bcrypt.compareSync("not my password", hash)); // true

//   console.log(users2);
//   console.log(users2.getDataValue('firstname'));
   console.log('firstname:');
   console.log(users2.firstname);
  	 res.render('register', { title: 'Express', firstname: 'Askar', lastname: 'bazayv', email: 'As@mk.com'});
  });  //then int 2

  });  //post

 
module.exports = router;
