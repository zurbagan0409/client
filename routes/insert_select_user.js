var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');

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
  lastname: 'qwertyuiret',
 firstname: '123456789'
 });
for (var i = 1; i<20; i++) {
 Users.findById(i).then(function(users){
 if (users != null)	
 console.log(users.dataValues);
 us1 = users;
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
  res.render('register', { title: 'Express'});
 }
 });
} 
//  User.findAll().then(users => {
//   console.log(users)
// })
// res.send('ready to register');	
});
module.exports = router;
