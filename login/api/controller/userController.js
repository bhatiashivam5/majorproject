require('../model/registerModel');
require('../config/passportConfig');
const passport= require('passport')
const mongoose = require('mongoose');
var registerData=mongoose.model('register');


const jwt = require('jsonwebtoken');


//register
module.exports.addRegister=(req,res)=>{
  var rgData=new registerData({
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      contact:req.body.contact,
      password:req.body.password
  });

  rgData.save().then((docs)=>{
      return res.status(200).json({
          success:true,
          message:'New Data recorded',
          data:docs
      })
  })
  .catch((err)=>{
      return res.status(401).json({
          success:false,
          message:'Error in adding data',
          error:err.message
      })
  })
}


//to check authentication

module.exports.authenticate=(req,res,next)=>{
  passport.authenticate('local',(err,user,info)=>{
      if(err) return res.status(404).json(err);
      if(user) return res.status(200).json({
          "token":jwt.sign({_id:user._id},"SecretToken",{expiresIn:'20m'}),
          "user":user
      });
      if(info) return res.status(401).json(info);
  })(req,res,next)
}


module.exports.userProfile=(req,res,next)=>{
  const id=req._id;
  registerData.find({_id:id}).then((docs)=>{
      return res.status(200).json({
          success:true,
          message:'user record found',
          data:_.pick(docs,['fname'])
      })
  })
  .catch((err)=>{
      return res.status(401).json({
          sucess:false,
          message:'Error finding records',
          error:err.message
      })
  })
}


//selected User

module.exports.selectedUser=(req,res)=>{
  registerData.findById({_id:req.params.x}).then((docs)=>{
    return res.status(200).json({
      success:true,
      message:'user found',
      data:docs
    })
  })
  .catch((err)=>{
   return res.status(400).json({
     success:false,
     message:'User not found',
     error:err.message

   })
  })
}
