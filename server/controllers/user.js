import { asyncError } from "../middlewares/error.js";
import {User} from "../models/user.js"
import { ErrorHandler } from "../utils/errorHandler.js"

export const login = asyncError(async (req, res, next) => {
    const {email,password} = req.body
    const user = await User.findOne({email}).select("+password")
    const isMatched = await user.comparePassword(password)
    if(isMatched){
        const token = user.generateToken()
        return res.status(200).json({
            success:true,
            message:`Welcome ${user.name}`,
            token
        })
    }else{
        return next(new ErrorHandler("Invalid credentials",400))
    }
})

export const signup = asyncError(async(req, res, next) => {
    const {name,email,password,address,city,country,pincode} = req.body;
    
    await User.create({name,email,password,address,city,country,pincode})
    res.status(201).json({
        success:true,
        message:"Registered successfully"
    })
})