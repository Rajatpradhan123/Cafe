const e = require('express');
const nodemailer = require('nodemailer')

const Regmail =function(req,res){

    const transport =nodemailer.createTransport({
        service:"gmail",
        host:"smtp.gmail.com",
        port:465,
        auth:{
            user:"pradhanrajat1999@gmail.com",
            pass:"olzk zybo elpe njcy"
        }
    });

    const mailoption ={
        from:"pradhanrajat1999@gmail.com",
        to: req.body.email,
        subject:"Welcome to Hotel Booking Website",
        text:'Registration mail',
        html:`<h1> Hello User Your Registration is Sussecfull. </h1></br>`
    }

    transport.sendMail(mailoption,function(err,info){
        if(err){
            console.log(err)
           return res.send(err)
        }
       
        res.send("email sent to user")
    })

}




module.exports = Regmail