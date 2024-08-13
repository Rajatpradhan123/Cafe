const mongoose = require('mongoose')
const plm = require("passport-local-mongoose")



const Userschema = mongoose.Schema ({


name:String,
username:String,
password:String,
email:String,
role:String

})

Userschema.plugin(plm)

module.exports = mongoose.model('User' , Userschema)