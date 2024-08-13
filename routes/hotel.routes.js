var express = require('express');
var router = express.Router();
const enquireymodel = require('../Models/enquirey')
const sendmail = require('../Utils/nodemailer')




router.post('/form', async function(req, res, next) {
  
    const User = await enquireymodel.create({
    
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    
})
   sendmail(req, res)
    res.redirect('/')
    
    });
    









module.exports = router;