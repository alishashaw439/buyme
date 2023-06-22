import { asyncError } from "../middlewares/error.js";
import {User} from "../models/user.js"
import { ErrorHandler } from "../utils/errorHandler.js"
import { cookieOptions, sendToken } from "../utils/utils.js";

export const login = asyncError(async (req, res, next) => {
    const {email,password} = req.body
    const user = await User.findOne({email}).select("+password")
    let isMatched = false
    if(!user){
        return next(new ErrorHandler("Incorrect email or password",400))
    }
    if(!password){
        return next(new ErrorHandler("Please enter your password",400))
    }
    isMatched = await user.comparePassword(password)
    if(isMatched){
       sendToken(user,res,`Welcome ${user.name}`,200)
    }else{
        return next(new ErrorHandler("Invalid credentials",400))
    }
})

export const signup = asyncError(async(req, res, next) => {
    const {name,email,password,address,city,country,pincode} = req.body;
    let user = await User.findOne({email})
    if(user){
        return next(new ErrorHandler("User already exist",400))
    }
   user = await User.create({name,email,password,address,city,country,pincode})
    sendToken(user,res,"Registered successfully",201)
})


export const logout = asyncError(async (req,res,next) =>{

    const user = await User.findById(req.user._id)
    res.status(200).cookie("token","",{
        ...cookieOptions,
        expires: new Date(Date.now())
    }).json({
        success:true,
        message: "Logged out successfully"
    })
})

export const getMyProfile = asyncError(async (req,res,next) =>{
    const user = await User.findById(req.user._id)
    res.status(200).json({
        success:true,
        user
    })
})

export const updateProfile = asyncError(async (req,res,next) =>{
    const {name,email,address,city,country,pincode} = req.body;
    const user = await User.findById(req.user._id)
    if(name){user.name = name}
    if(email){user.email = email}
    if(country){user.country = country}
    if(address){user.address = address}
    if(city){user.city = city}
    if(pincode){user.pincode = pincode}
   await user.save()
    res.status(200).json({
        success:true,
        message:"Profile updated successfully"
    })
})

export const changePassword = asyncError(async (req,res,next) =>{
    const user = await User.findById(req.user._id).select("+password")
    const {oldPassword,newPassword} = req.body
    if(!oldPassword || !newPassword){
        return next(new ErrorHandler("Please enter old password and new password",400))
    }
    const isMatched = await user.comparePassword(oldPassword)
    if(!isMatched){
        return next(new ErrorHandler("Incorrect old password",400))
    }
    user.password = newPassword
    await user.save()
    res.status(200).json({
        success:true,
        message:"Password changed successfully"
    })
})