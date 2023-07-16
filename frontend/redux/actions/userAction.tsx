import axios from "axios"
import {server} from "../store.tsx"

export const register = (formData) => async(dispatch:any)=>{
    try{
        dispatch({
            type:"loginRequest"
        })
        const {data} = await axios.post(`${server}/user/signup`,formData,{
            headers:{
                "Content-type":"multipart/form-data"
            },
            withCredentials:true
        })
       console.log("sign up",data)
        dispatch({
            type:"registerSuccess",
            payload:data.message
        })
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"registerFail",
            payload: error.response.data.message
        })
    }
}

export const login = (email,password) => async(dispatch:any)=>{
    try{
        dispatch({
            type:"loginRequest"
        })
        const {data} = await axios.post(`${server}/user/login`,{
            "email":email,
            "password":password
        },{
            headers:{
                "Content-type":"application/json"
            },
            withCredentials:true
        },)
       console.log(data)
        dispatch({
            type:"loginSuccess",
            payload:data.message
        })
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"loginFail",
            payload: error.response.data.message
        })
    }
}

export const loadUser = () => async(dispatch:any)=>{
    try{
        dispatch({
            type:"loadUserRequest"
        })
        const {data} = await axios.get(`${server}/user/profile`,{
            withCredentials:true
        })
       console.log(data)
        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        })
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"loadUserFail",
            payload: error.response.data.message
        })
    }
}

export const logout = () => async(dispatch:any)=>{
    try{
        dispatch({
            type:"logoutRequest"
        })
        const {data} = await axios.get(`${server}/user/logout`,{
            withCredentials:true
        })
       console.log(data)
        dispatch({
            type:"logoutSuccess",
            payload:data.message
        })
    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          }
        dispatch({
            type:"logoutFail",
            payload: error.response.data.message
        })
    }
}