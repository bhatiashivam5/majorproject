const mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
  Fname:{
    type:String
  },
  Lname:{
    type:String
  },
  Address1:{
    type:String
  },
  Address2:{
    type:String
  },
  City:{
    type:String
  },
  State:{
    type:String
  },
  Zip:{
    type:String
  },

});


mongoose.model('address',addressSchema);
