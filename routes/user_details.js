var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var db = require('../models/dbs.js');
var database = new db('localhost', 'root', 'admin', 'warehouses');
var sess;
var bcrypt = require('bcrypt');
// var app.use(express.bodyParser());
var session = require('express-session');
database.con.sync();
router.get('/', (req,res,next) => {
var user_id = req.query['user.id'];
//console.log user_id;	
console.log(req.query['user.id']);	
var users = database.Users.findById(user_id).then(function(user){
	 
 	 res.render('user_details', { user : user });
});	// then
}); // get
router.post('/', (req,res,next) => {
var userid = req.body.userid;
//console.log user_id;	
console.log('In Post:'); 
// console.log(req.query['user.id']);	
console.log(req.body.userid);	
var users = database.Users.findById(userid).then(function(user){
  if (!user) return next(new Error('failed to find user'));
	database.Users.update(
  { firstname: req.body.firstname,
   lastname: req.body.lastname,
   email:req.body.email },
  {  where: {id:userid}}
  )
  .then(result =>{
     console.log('updated');
  }
  )
  .catch(err =>{
    console.log('User not updated' );
    console.log( err);
  	
  }
  )
  
//	 user.firstname = req.body.firstname;
 	 res.redirect('/user_details?user.id='+userid);
});	// then
}); // get

 
module.exports = router;
