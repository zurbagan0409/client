var express = require('express');
var router = express.Router();
var session = require('express-session');
var db = require('../models/dbs.js')
var database = new db('localhost', 'root', 'admin', 'warehouses');
var sess;
//router.get('/', (req,res,next) => {
	
//sess = req.session;	

router.get('/',function(req,res){
req.session.destroy(function(err) {
  if (err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
});
});
module.exports = router;
