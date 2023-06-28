import { asyncError } from "../middlewares/error.js";
import {Product} from "../models/product.js"
import { ErrorHandler } from "../utils/errorHandler.js";

export const getAllProducts = asyncError(async(req,res,next)=>{
    const products = await Product.find({})
    res.status(200).json({
        success:true,
        products
    });
})

export const getProductDetails = asyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(!product) return next(new ErrorHandler("Product not found",404))
    res.status(200).json({
        success:true,
        product
    });
})