import axios from "axios"
import {server} from "../store"

export const getAllProducts = (keyword,category) => async(dispatch:any)=>{
    try{
        dispatch({
            type:"getAllProductsRequest"
        })
        console.log("call")
        const {data} = await axios.get(`${server}/product/all?keyword=${keyword}&category=${category}`,{
            withCredentials:true
        })
        console.log(data.products)
        dispatch({
            type:"getAllProductsSuccess",
            payload:data.products
        })
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"getAllProductsFail",
            payload: error.response.data.message
        })
    }
}

export const getAdminProducts = () => async(dispatch:any)=>{
    try{
        dispatch({
            type:"getAdminProductsRequest"
        })
        const {data} = await axios.get(`${server}/product/admin`,{
            withCredentials:true
        })
        dispatch({
            type:"getAdminProductsSuccess",
            payload:data
        })
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"getAdminProductsFail",
            payload: error.response.data.message
        })
    }
}

export const getProductDetails = (id:any) => async(dispatch:any)=>{
    try{
        dispatch({
            type:"getProductsDetailsRequest"
        })
        const {data} = await axios.get(`${server}/product/single/${id}`,{
            withCredentials:true
        })
       console.log("product details",data)
        dispatch({
            type:"getProductDetailsSuccess",
            payload:data.product
        })
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"getProductDetailsFail",
            payload: error.response.data.message
        })
    }
}