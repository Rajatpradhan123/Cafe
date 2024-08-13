const e = require('express');
const nodemailer = require('nodemailer')

const sendmail =function(req,res){

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
        text:'hello welcome from oue team',
        html:`<h1> Hello We Have Succesfully Receive Your Booking Details</h1></br>`
    }

    transport.sendMail(mailoption,function(err,info){
        if(err){
            console.log(err)
           return res.send(err)
        }
       
        res.send("email sent to user")
    })

}




module.exports = sendmail