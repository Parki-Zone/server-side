const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
const controllers = require('../controllers/user')
const emailsend= require('../controllers/Mail')

const mailGun = require('nodemailer-mailgun-transport');

      
router.post('/user/create', controllers.createUser);
router.get('/users', controllers.getUsers);
router.post('/login', controllers.findUser);
router.get('/Profile/:email', controllers.getprof)
router.put('/Profile/:id',controllers.updateprof);
router.post('/delete/:userId', controllers.deleteUser)
router.get('/user/:email', controllers.getOneUsers) 
router.get('/allusers', controllers.AllUsers);

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
router.post('/sendemail',(req,res,next)=>{
    console.log(req.body)
    
    let data =req.body
    
    const auth = {
        
        auth: {
          api_key: "26e92e4d8385e62c7132e7a6de4829a4-2a9a428a-5ac60e7f",
          domain: "sandbox2c238f9df89d419eae7240fc249fa242.mailgun.org"
        }}
  
    var transporter = nodemailer.createTransport(mailGun(auth));

   
    var mailOptions = {
    from: data.email,
    to: 'dalihili69@gmail.com',
    subject: `Contact name: ${data.name} ,${data.subject}`,
    text: `${data.message}`
    };
  
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    res.send('error') 
    }
    else {
    console.log('Email sent: ' + info.response);
    res.send('Sent Successfully')
    }
    });
    })

module.exports = router;