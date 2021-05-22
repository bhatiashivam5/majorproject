var express = require('express');

var myctrl = require('../controller/userController');
var jwt=require('../config/jwtHelper');
var approute=express.Router();


//register

approute.post('/reg',myctrl.addRegister);
approute.post('/auth',myctrl.authenticate);
approute.get('/profile',jwt.verifyJwtToken,myctrl.userProfile);
approute.get('/userinfo/:x',myctrl.selectedUser);

//for add address
approute.post('/address',myctrl.addAddress);

module.exports = approute;
