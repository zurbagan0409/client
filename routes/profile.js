var express = require('express');
var router = express.Router();
var session = require('express-session');
var db = require('../models/dbs.js');
var database = new db('localhost', 'root', 'admin', 'warehouses');
var sess;
//router.get('/', (req,res,next) => {
	
//sess = req.session;	

router.get('/',(req, res) =>{
    if(!req.session.email){
        res.redirect('/login?error=2');
    }
    res.render('profile', {data : req.session});

});
module.exports = router;


