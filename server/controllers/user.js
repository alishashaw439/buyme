import { asyncError } from "../middlewares/error.js";
import {User} from "../models/user.js"
import { ErrorHandler } from "../utils/errorHandler.js"
import { cookieOptions, sendToken } from "../utils/utils.js";

export const login = asyncError(async (req, res, next) => {
    const {email,password} = req.body
    const user = await User.findOne({email}).select("+password")
    const isMatched = await user.comparePassword(password)
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