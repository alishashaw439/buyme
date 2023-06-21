import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:[true,"Email already exist"],
        validate: validator.isEmail
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength: [6,"Password must be atleat 6 characters long"],
        select: false
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    avatar:{
        public_id:String,
        url:String
    },
    otp:Number,
    otp_expire: Date
});

schema.pre("save",async function(){
this.password = await bcrypt.hash(this.password,10)
})

schema.methods.generateToken = function(){
  return jwt.sign({_id:this._id},process.env.JWT_SECRET,{
    expiresIn:"15d"
   })
}

schema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
 }
export const User = mongoose.model("User",schema)
