import express from 'express'
import {createOrder } from '../controllers/order.js'
import { isAuthenticated } from '../middlewares/auth.js'

 const router = express.Router()

 router.post("/new",isAuthenticated,createOrder)

 export default router