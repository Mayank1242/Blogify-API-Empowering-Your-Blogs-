const mongoose=require("mongoose");

const UserShcema=new mongoose.Schema({
  name:{
   type:String,
   required: true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  }

})

const user= new mongoose.model("user",UserShcema);
module.exports=  user;
