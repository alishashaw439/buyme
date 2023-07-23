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