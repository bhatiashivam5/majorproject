const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

var registerSchema = mongoose.Schema({
    fname:{
        type:String,
        required:[true,'Name should not be left blank'],
        minlength:[5,'Name must be atleast 5 characters long']
    },
    lname:{
      type:String,
      required:[true,'Name should not be left blank']
    },
    email:{
        type:String,
        unique:[true,'Email Already Exists']
    },
    contact:{
        type:String,
        maxlength:[10,'contact must be atleast 10 number long'],
        minlength:[10,'contact must be atleast 10 number long']
    },
    password:{
        type:String,
        required:[true,'password should not left empty'],
        minlength:[4,'Password should be greater than 4']
    },
    saltString:{type:String}
});






//methods for encrypting password

registerSchema.pre('save',function(next){
    bcrypt.genSalt(15,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash,
            this.saltString=salt
            next();
        })
    })

});



registerSchema.methods.verifyPassword = function(password){
  return bcrypt.compareSync(password,this.password);
}

mongoose.model('register',registerSchema);
