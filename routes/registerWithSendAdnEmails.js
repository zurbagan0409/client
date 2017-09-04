var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
// var app.use(express.bodyParser());

var connection = new Sequelize('warehouses', 'root', 'admin',{
 dialect: 'mysql'
});

var Users = connection.define('users', {
lastname:Sequelize.STRING,
firstname: Sequelize.STRING,
email: Sequelize.STRING
},{timestamps: false});
var us1;
connection.sync().then(function (){
 Users.create({ 
  lastname: 'Bazayev',
 firstname: 'Askar',
 email: 'askar0409@hotmail.com'
 });
/* 
for (var i = 1; i<20; i++) {
 Users.findById(i).then(function(users){
 if (users != null)	
 console.log(users.dataValues);
 });
}
*/
});
router.get('/', (req,res,next) => {
//  res.render('index', { title: 'Express' });
/*
for (var i = 1; i<2; i++) {
 Users.findById(i).then(function(users){
 if (users != null){	
 console.log(users.dataValues);
 us1 = users;
// res.send( users.getDataValue('firstname'));
  res.render('register', { title: 'Express', firstname: users.getDataValue('firstname'), lastname: users.getDataValue('lastname'), email: users.getDataValue('email')});
 }
 });
}
*/
//  User.findAll().then(users => {
//   console.log(users)
// })
// res.send('ready to register');	
});
router.post('/', (req,res,next) => {

$user = Users.create({ 
 lastname: req.body.lastname,
 firstname: req.body.firstname,
 email: req.body.email
 });
$id = $user.id;
  Users.findById($id).then(function(users){
 if (users != null){	
 console.log(users.dataValues);
// res.send( users.getDataValue('firstname'));
  res.render('register', { title: 'Express', firstname: users.getDataValue('firstname'), lastname: users.getDataValue('lastname'), email: users.getDataValue('email') });
}
});  
// res.send('ok');
});
module.exports = router;

