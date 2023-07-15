import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./reducers/userReducer"

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})
export const server = "https://ecommerce-server-jht9.onrender.com/api/v1"