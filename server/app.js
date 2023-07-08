import express from "express";
import {config} from "dotenv";
import user from "./routes/user.js";
import order from "./routes/order.js";
import product from "./routes/product.js";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser"
import cors from "cors"

config({
    path:"./data/config.env"
})
export const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
    origin:[process.env.FRONTEND_URL_1,process.env.FRONTEND_URL_2]
}))
app.get("/",(req,res,next)=>{
    res.send("working")
})

app.use("/api/v1/user",user)
app.use("/api/v1/product",product)
app.use("/api/v1/order",order)

app.use(errorMiddleware)