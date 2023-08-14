import axios from "axios"
import { server } from "../store"

export const changePassword = (oldPassword,newPassword) => async (dispatch:any)=>{
    try{
        dispatch({
            type:"changePasswordRequest",
        })
        const {data} = await axios.put(`${server}/user/changepassword`,{
            oldPassword,
            newPassword
        },{
           headers:{
            "Content-Type":"application/json"
           },
           withCredentials:true
        })
        console.log(data)
        dispatch({
            type:"changePasswordSuccess",
            payload:data.message
        })

    }catch(error){
        dispatch({
            type:"changePasswordFail",
            payload:error.response.data.message
        })
    }
}

export const updateProfile = (
    name,
    email,
    address,
    city,
    country,
    pincode

) => async (dispatch:any)=>{
    try{
        dispatch({
            type:"updateProfileRequest",
        })
        const {data} = await axios.put(`${server}/user/updateprofile`,{
            name,
            email,
            address,
            city,
            country,
            pincode
        },{
           headers:{
            "Content-Type":"application/json"
           },
           withCredentials:true
        })
        console.log("boo",data)
        dispatch({
            type:"updateProfileSuccess",
            payload:data.message
        })

    }catch(error){
        dispatch({
            type:"updateProfileFail",
            payload:error.response.data.message
        })
    }
}


export const updatePic = (formData) => async(dispatch:any)=>{
    try{
        dispatch({
            type:"updatePicRequest"
        })
        const {data} = await axios.put(`${server}/user/updatepic`,formData,{
            headers:{
                "Content-type":"multipart/form-data"
            },
            withCredentials:true
        })
        dispatch({
            type:"updatePicSuccess",
            payload:data.message
        })
        console.log("successs update pic")
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"updatePicFail",
            payload: error.response.data.message
        })
    }
}

export const placeOrder = (shippingInfo,orderItems,paymentMethod,paymentInfo,itemsPrice,taxPrice,shippingCharges,totalAmount) => async (dispatch:any)=>{
    try{
        dispatch({
            type:"placeOrderRequest",
        })
        const {data} = await axios.post(`${server}/order/new`,{
            shippingInfo,orderItems,paymentMethod,paymentInfo,itemsPrice,taxPrice,shippingCharges,totalAmount
        },{
           headers:{
            "Content-Type":"application/json"
           },
           withCredentials:true
        })
        dispatch({
            type:"placeOrderSuccess",
            payload:data.message
        })

    }catch(error){
        dispatch({
            type:"placeOrderFail",
            payload:error.response.data.message
        })
    }
}

export const processOrder = (id) => async (dispatch:any)=>{
    try{
        dispatch({
            type:"processOrderRequest",
        })
        const {data} = await axios.put(`${server}/order/single/${id}`,{},{
           headers:{
            "Content-Type":"application/json"
           },
           withCredentials:true
        })
        dispatch({
            type:"processOrderSuccess",
            payload:data.message
        })

    }catch(error){
        dispatch({
            type:"processOrderFail",
            payload:error.response.data.message
        })
    }
}

export const addCategory = (category) => async (dispatch:any)=>{
    try{
        dispatch({
            type:"addCategoryRequest",
        })
        const {data} = await axios.post(`${server}/product/addcategory`,{
            category
        },{
           headers:{
            "Content-Type":"application/json"
           },
           withCredentials:true
        })
        dispatch({
            type:"addCategorySuccess",
            payload:data.message
        })

    }catch(error){
        dispatch({
            type:"addCategoryFail",
            payload:error.response.data.message
        })
    }
}

export const deleteCategory = (id) => async (dispatch:any)=>{
    try{
        dispatch({
            type:"deleteCategoryRequest",
        })
        const {data} = await axios.delete(`${server}/product/category/${id}`,
        {
           withCredentials:true
        })
        dispatch({
            type:"deleteCategorySuccess",
            payload:data.message
        })

    }catch(error){
        dispatch({
            type:"deleteCategoryFail",
            payload:error.response.data.message
        })
    }
}

export const createProduct = (formData) => async(dispatch:any)=>{
    try{
        dispatch({
            type:"addProductRequest"
        })
        console.log("yoooo")
        const {data} = await axios.post(`${server}/product/new`,formData,{
            headers:{
                "Content-type":"multipart/form-data"
            },
            withCredentials:true
        })
        console.log("yoo2",data)
        dispatch({
            type:"addProductSuccess",
            payload:data.message
        })
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"addProductFail",
            payload: error.response.data.message
        })
    }
}

export const updateProduct =
  (id, name, description, price, stock, category) => async (dispatch) => {
    try {
      dispatch({
        type: "updateProductRequest",
      });
      const { data } = await axios.put(
        `${server}/product/single/${id}`,
        {
          name,
          description,
          price,
          stock,
          category,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateProductSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProductFail",
        payload: error.response.data.message,
      });
    }
  };
