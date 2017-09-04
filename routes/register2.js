var express = require('express');
var router = express.Router();
// Or you can simply use a connection uri

router.get('/', (req,res,next) => {
//  res.render('index', { title: 'Express' });
		
 // res.render('register', { title: 'Express' });
//  User.findAll().then(users => {
   //console.log(users)
//})
// res.send('ready to register');	
});
router.post('/', (req,res,next) => {
  res.render('index', { title: 'Express' });
  
//  res.render('register', { title: 'Express' });
//	User.findAll().then(users => {
//			console.log(users)
//	})
});


module.exports = router;
