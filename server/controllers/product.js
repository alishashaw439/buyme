import { asyncError } from "../middlewares/error.js";
import {Product} from "../models/product.js"
import {Category} from "../models/category.js"
import { ErrorHandler } from "../utils/errorHandler.js";
import { getDataUri } from "../utils/utils.js";
import cloudinary from "cloudinary";

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

export const createProduct = asyncError(async(req,res,next)=>{
    const {name,description,category,price,stock} = req.body
    if(!req.file) return next(new ErrorHandler("Please add image",400))
    const file = getDataUri(req.file)
    const myCloud =  await cloudinary.v2.uploader.upload(file.content)
    const image = {
        public_id : myCloud.public_id,
        url: myCloud.secure_url
    }

    await Product.create({
        name,
        description,
        category,
        price,
        stock,
        images:[image]
    })
  
    res.status(200).json({
        success:true,
        message:"product created successfully"
    });
})

export const updateProduct = asyncError(async(req,res,next)=>{
    const {name,description,category,price,stock} = req.body

    const product = await Product.findById(req.params.id)
    if(!product) return next(new ErrorHandler("Product not found",404))

    if(name) product.name = name
    if(description) product.description = description
    if(category) product.category = category
    if(price) product.price = price
    if(stock) product.stock = stock

    await product.save()
    res.status(200).json({
        success:true,
        message:"product updated successfully"
    });
})

export const deleteProduct = asyncError(async(req,res,next)=>{

    const product = await Product.findById(req.params.id)
    if(!product) return next(new ErrorHandler("Product not found",404))
    for(let i=0;i<product.images.length;i++){
        await cloudinary.v2.uploader.destroy(product.images[i].public_id)
    }

    await product.deleteOne()
    res.status(200).json({
        success:true,
        message:"product deleted successfully"
    });
})

export const addProductImage = asyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(!product) return next(new ErrorHandler("Product not found",404))

    if(!req.file) return next(new ErrorHandler("Please add image",400))
    const file = getDataUri(req.file)
    const myCloud =  await cloudinary.v2.uploader.upload(file.content)
    const image = {
        public_id : myCloud.public_id,
        url: myCloud.secure_url
    }

    product.images.push(image)
    await product.save()
  
    res.status(200).json({
        success:true,
        message:"image added successfully"
    });
})

export const deleteProductImage = asyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(!product) return next(new ErrorHandler("Product not found",404))
    
    const id = req.query.id
    if(!id) return next(new ErrorHandler("Please enter valid id",400))

    let isExist = -1
    product.images.forEach((item,index)=>{
        if(item._id.toString() == id.toString()){
            isExist = index
        }
    })
    if(isExist < 0){
        return next(new ErrorHandler("Image doesn't exist",400))
    }

    await cloudinary.v2.uploader.destroy(product.images[isExist].public_id)

    product.images.splice(isExist,1)
    await product.save()
    res.status(200).json({
        success:true,
        message:"deleted image successfully"
    });
})

export const addCategory = asyncError(async (req,res,next)=>{
  await Category.create(req.body)
  res.status(201).json({
    success:true,
    message:"Category added successfully"
  })
})

export const getAllCategories = asyncError(async (req,res,next)=>{
  const categories = await Category.find({})

  res.status(201).json({
    success:true,
    categories
  })
})

export const deleteCategory = asyncError(async (req,res,next)=>{
   const category = await Category.findById(req.params.id)
   if(!category) return next(new ErrorHandler("Categoray not found",404))
   const products = await Product.find({category:category._id})

   for(let i=0;i<products.length;i++){
    const product = products[i]
    product.category = undefined
    await product.save()
   }
   await Category.deleteOne()

   res.status(200).json({
    success:true,
    message:"Category deleted successfully"
   })
})