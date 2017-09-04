var express = require('express');
var router = express.Router();
// Or you can simply use a connection uri
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:admin@localhost/warehouses',{
	
});
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
// var users = new User();

router.get('/', (req,res,next) => {
//  res.render('index', { title: 'Express' });
		
 // res.render('register', { title: 'Express' });
//  User.findAll().then(users => {
//   console.log(users)
// })
// res.send('ready to register');	
});
router.post('/', (req,res,next) => {
//  res.render('index', { title: 'Express' });
  
  res.render('register', { title: 'Express' });
//	User.findAll().then(users => {
//			console.log(users)
//	})
});



module.exports = router;
