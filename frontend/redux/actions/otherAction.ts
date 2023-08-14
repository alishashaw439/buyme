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
    console.log("yo 1")
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
        console.log("yo 2",data)
        dispatch({
            type:"placeOrderSuccess",
            payload:data.message
        })

    }catch(error){
        console.log("yo error",error)
        dispatch({
            type:"placeOrderFail",
            payload:error.response.data.message
        })
    }
}
