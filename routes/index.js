var express = require('express');
var router = express.Router();

/* GET home page. */
var sess;
router.get('/', function(req, res, next) {
    console.log('test index');
        sess=req.session;
    /*
    * Here we have assign the 'session' to 'sess'.
    * Now we can create any number of session variable we want.
    * in PHP we do as $_SESSION['var name'].
    * Here we do like this.
    */
 //   sess.email = 'as@mk.ru'; // equivalent to $_SESSION['email'] in PHP.
//    sess.username; // equivalent to $_SESSION['username'] in PHP.
//Session set when user Request our app via URL
if(sess.email) {
/*
* This line check Session existence.
* If it existed will do some action.
*/
console.log('redir profile');
    res.redirect('/profile');
}
else {
    console.log('redir login');
    res.render('login');
}

// debug(sess.email);
 // res.render('index', { title: 'Express1' });
});
router.get('/hello', (req,res,next) => {
  //  req.
//  res.render('index', { title: 'Express' });
  res.render('index',{title:'Hello World1984!'});
//  res.render('index',{title:'Hello World1986!'});
});
// router.get('/register', (req,res,next) => {
//  res.render('index', { title: 'Express' });
//  res.render('register',{askar:'Hello World1986!'});
// });
module.exports = router;
    