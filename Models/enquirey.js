const mongoose = require('mongoose')



const enquiryschema = mongoose .Schema({

name:String,
email:String,
mobile:String




})


module.exports = mongoose.model('enquiry', enquiryschema)