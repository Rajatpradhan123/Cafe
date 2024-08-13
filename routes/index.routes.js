var express = require('express');
var router = express.Router();
const enquireymodel = require('../Models/enquirey')
 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});



router.get('/register', function (req, res, next) {
  res.render('register', { user: req.user });
});



router.get('/login', function (req, res, next) {
  console.log(req.user)
  res.render('login', {  user: req.user});
});


router.get('/admin', async function (req, res, next) {
 
 
 const alluser = await enquireymodel.find()
 
  res.render('admin', {  user: req.user, alluser:alluser });
});











module.exports = router;
