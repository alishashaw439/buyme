import axios from "axios"
import {server} from "../store.tsx"

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
            }
        })
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