var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
// var app.use(express.bodyParser());

var connection = new Sequelize('warehouses', 'root', 'admin',{
 dialect: 'mysql'
});

var Users = connection.define('users', {
lastname:Sequelize.STRING,
firstname: Sequelize.STRING
 
},{timestamps: false});
var us1;
connection.sync().then(function (){
 Users.create({ 
  lastname: 'Bazayev',
 firstname: 'Askar'
 });
for (var i = 1; i<20; i++) {
 Users.findById(i).then(function(users){
 if (users != null)	
 console.log(users.dataValues);
 });
}

});
router.get('/', (req,res,next) => {
//  res.render('index', { title: 'Express' });
for (var i = 19; i<20; i++) {
 Users.findById(i).then(function(users){
 if (users != null){	
 console.log(users.dataValues);
 us1 = users;
// res.send( users.getDataValue('firstname'));
  res.render('register', { title: 'Express', firstname: users.getDataValue('firstname')});
 }
 });
}
//  User.findAll().then(users => {
//   console.log(users)
// })
// res.send('ready to register');	
});
router.post('/', (req,res,next) => {
Users.create({ 
  lastname: 'Bazayev in Post',
 firstname: req.body.firstname
 });	
 Users.findById(1).then(function(users){
 if (users != null){	
 console.log(users.dataValues);
// res.send( users.getDataValue('firstname'));
  res.render('register', { title: 'Express', firstname: users.getDataValue('firstname')});
 }
 });
res.send('ok');
});
module.exports = router;
