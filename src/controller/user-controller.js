const user = require("../model/user");
const bcrypt = require('bcryptjs');
const getAllUSer = async(req,res,next)=>{
    let users;
    try{
        users=await user.find();
    }catch(e){
        console.log(e);
    }


    if(!users){
        return res.status(404).json({message:"No user Found"});
    }

    return res.status(200).json({users});
}

const signup= async(req,res)=>{
    const {name,email,password}=req.body;
    let existingUser;
    try {
        existingUser = await user.findOne({email});
    } catch (error) {
       return console.log(e);
    }

    if(existingUser){
        return res.status(400).json({message:"user avalible ! GO DO LOGIN"});
    }
    const hashedPassword=bcrypt.hashSync(password);

    const User=new user({
        name,
        email,
        password:hashedPassword,
    });


    //Hashed passwrd

    try {
       await User.save();
    } catch (error) {
        return console.log(error);
    }
    return res.status(201).json({User});
}

const login =async(req,res,next)=>{
    const {email, password}=req.body;
    let existingUser;
    try {
        existingUser = await user.findOne({email});
    } catch (error) {
       return console.log(e);
    }

    if(!existingUser){
        return res.status(404).json({message:"User Not Avalible Singup Now"});
    }

    const isPasswordCorrect= bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incoorect Password"});
    }
    return res.status(200).json({message:"Login Succesfull"});

}
module.exports = {getAllUSer, user ,signup,login};