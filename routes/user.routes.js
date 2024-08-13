var express = require('express');
var router = express.Router();
const Usermodel = require('../Models/userschema')
const postmodel = require('../Models/enquirey')
const passport = require('passport')
const localstrategy = require('passport-local')
const { isLoggedIn } = require('../Middleware/middleware')
passport.use(new localstrategy(Usermodel.authenticate()))
const Regmail = require('../Utils/Hotelmailer')



router.post('/register', function (req, res, next) {

  const userdata = new Usermodel({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    role: req.body.role
  })

  Usermodel
    .register(userdata, req.body.password)
    Regmail(req, res)
  // .then(function (registerUser) {
  //   passport.authenticate('local')(req, res, function () {
  res.redirect('/login')
})
//     })
// });



router.post('/login', passport.authenticate('local', {
  successRedirect: "/user/profile",
  failureRedirect: "/login"
}));


router.get('/profile', isLoggedIn, function (req, res, next) {
  res.render('profile', { user: req.user })
});




router.get('/logout', isLoggedIn, function (req, res, next) {
  req.logout(function (err) {

    if (err) {
      return next(err)
    }
    else {
      res.redirect('/login')
    }

  })
});













module.exports = router;