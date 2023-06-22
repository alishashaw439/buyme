import { ErrorHandler } from "../utils/errorHandler.js"
import {User} from "../models/user.js"
import jwt from "jsonwebtoken"
import { asyncError } from "./error.js"
export const isAuthenticated = asyncError(async (req,res,next)=>{
    const {token} = req.cookies
    if(!token){
     return next(new ErrorHandler("Not logged in",401))
    }
 
    const decodedData = jwt.verify(token,process.env.JWT_SECRET)
    req.user = await User.findById(decodedData._id)

    next()
 })