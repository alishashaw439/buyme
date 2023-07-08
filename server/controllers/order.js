import {asyncError} from "../middlewares/error.js";
import {Order} from '../models/order.js';
import {Product} from '../models/product.js';

export const createOrder = asyncError(async(req,res,next)=>{
        const {shippingInfo,orderItems,paymentMethod,paymentInfo,itemsPrice,taxPrice,shippingCharges,totalAmount} = req.body
        await Order.create({
            user: req.user._id,
            shippingInfo,
            orderItems,
            paymentMethod,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingCharges,
            totalAmount})
        for(let i = 0;i<orderItems.length;i++){
            const product = await Product.findById(orderItems[i].product)
            product.stock -= orderItems[i].quantity
            await product.save()
        }

        res.status(201).json({
            success:true,
            message:"Order Placed Successfully"
        })
}) 