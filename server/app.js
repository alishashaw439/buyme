import express from "express";
import {config} from "dotenv";
import user from "./routes/user.js";
import product from "./routes/product.js";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser"

config({
    path:"./data/config.env"
})
export const app = express()

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res,next)=>{
    res.send("working")
})

app.use("/api/v1/user",user)
app.use("/api/v1/product",product)

app.use(errorMiddleware)