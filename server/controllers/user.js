// const User = require('../models/index.js').user
// const auth = require('../middleware/auth')

// module.exports = {
//     getUser:   (req, res) => {
//         User.find({}, (err, result) => {
//             if (err) {
//                 console.error(err)
//                 return
//          } 
//         res.send(result)
//     })
// },

//  getUserById :  (req,res) => { 
//      User.findById(req.params.id,(err,result) => {
//         res.send(result)
//     })
// },


// addUser :  (req,res) => {
//    const  user = new User({
//        firstName: req.body.firstName,
//        lastName: req.body.lastName,
//        email: req.body.email,
//        password: auth.createHash(req.body.password),
     
//     })
//     console.log(user);
//      user.save(() => {
//     res.send(user)
// })
// },

//  editUser :  (req,res) => {
//      User.updateOne(  {'_id': req.params.id },  req.body, (err, result) => {
//          if (err) {
//              res.status(400).send('id dont exist')
//              return
//          }
//          res.status(200).send('message updated')
//      })
// },


//  deleteUserById :   (req,res) => {
//      User.deleteOne({ '_id': req.params.id }, (err, result) => {
//          if (err) {
//              res.status(400).send('id not found')
//              return
//          }
//          res.status(200).send({"message":"User deleted successfully"})
//      })
//              },

// findUser :  (req, res) => {

//                     console.log(req.body.email.toString())
//                      User.find({'email':req.body.email.toString()},(err,result)=>{
//                         if(err){
//                             console.log(err)
//                             res.status(500).send('error')
//                             return
//                         }

                        
//                       if(result.length >0 && result[0].password == auth.createHash(req.body.password)){

//                          var session = auth.RandomString(32)

//                         auth.CreateSession(req,res,result[0]._id,session,result[0].role)

//                       }else{
//                         res.send({"message":"password wrong"});
//                       }
                      
//                    })
                   
                  
              
                  
//            }
//             }


const Users =require('../database/index')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.createUser = async (req, res)=>{
    //CHECK IF THE USER IS ALREADY IN THE DATABASE
  const emailExist = await Users.findOne({ where: {email: req.body.email} });
  console.log("hhhhhh", req.body.email);
  if (emailExist) return res.send("Email already exists");
    //HASH THE PASSWORD BEFORE SAVING
    const hash = bcrypt.hashSync(req.body.password, 10)
  //CRATE A NEW USER
  const newUser = await Users.create({ 
      username: req.body.username,
      email: req.body.email,
      password: hash
  });
//   console.log(hash);
    try {
        const saveUser = await newUser.save();
        console.log();
        res.json(saveUser);
    }catch (err) {
        console.log(err);
    }
}

module.exports.getUsers = async (req, res)=>{
    try {
        const Allusers = await Users.findAll();
        res.send(Allusers);
    }catch (err) {
        console.log(err);
    }
}






   