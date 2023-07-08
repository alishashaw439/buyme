import mongoose from "mongoose";

const schema = new mongoose.Schema({
  shippingInfo:{
        address:{
            type:String,
            required:[true,"enter address"]
        },
        city :{
            type:String,
            required:[true,"enter city"]
        },
        country:{
            type:String,
            required:[true,"enter country"]
        },
        pinCode:{
            type:Number,
            required:[true,"enter pin code"]
        },
  },

  orderItems:[
    {
        name:{
            type:String,
            required:[true,"enter item name"]
        },
        price:{
            type:Number,
            required:[true,"enter price"]
        },
        quantity:{
            type:Number,
            required:[true,"enter quantity"]
        },
        image:{
            type:String,
            required:[true,"enter image"]
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"Product",
            required:[true,"Enter product"]
        },
    }
  ],

  user:{
    type:mongoose.Types.ObjectId,
    ref:"User",
    required:[true,"enter user"]
  },
  paymentMethod:{
    type:String,
    enum:["COD","ONLINE"],
    default:"COD"
  },
  paidAt:Date,
  paymentInfo:{
    id:String,
    status:String
  },

  itemsPrice:{
    type:Number,
    required:[true,"enter price of item"]
  },
  taxPrice:{
    type:Number,
    required:[true,"enter tax price"]
  },
  shippingCharges:{
    type:Number,
    required:[true,"enter shipping charges"]
  },
  totalAmount:{
    type:Number,
    required:[true,"enter total amount"]
  },
  orderStatus:{
    type:String,
    enum:["Preparing","Shipped","Delivered"],
    default: "Preparing"
  },
  deliveredAt:Date,
  createdAt:{
    type:Date,
    default: Date.now
  }

});

export const Order = mongoose.model("Order",schema)
