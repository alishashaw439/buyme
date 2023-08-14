import { useEffect } from "react"
import { Toast } from "react-native-toast-message/lib/src/Toast"
import { useSelector } from "react-redux"
import { loadUser } from "../redux/actions/userAction"
import axios from "axios"
import { server } from "../redux/store"


export const useMessageAndErrorUser = (navigation,dispatch,navigateTo="login")=>{
    const {loading,message,error} = useSelector((state)=> state.user)
    console.log("from hook",navigateTo)
    useEffect(()=>{
        if(error){
            Toast.show({
                type:"error",
                text1:error
            })
        }
        dispatch({
            type:"clearError",
        })
        if(message){
            navigation.reset({
                index:0,
                routes:[{name:navigateTo}]
            })
            Toast.show({
                type:"success",
                text1:message
            })
            dispatch(loadUser());
        }
        dispatch({
            type:"clearMessage",
        })
       
    },[error,message,dispatch])
    return loading
}

export const useMessageAndErrorOther = (dispatch,navigation,navigateTo,func)=>{
    const {loading,message,error} = useSelector((state)=> state.other)
    useEffect(()=>{
        if(error){
            Toast.show({
                type:"error",
                text1:error
            })
        }
        dispatch({
            type:"clearError",
        })
        if(message){
            Toast.show({
                type:"success",
                text1:message
            })
            navigateTo && navigation.navigate(navigateTo)
            func && dispatch(func()) 
        }
        dispatch({
            type:"clearMessage",
        })
      
    },[error,message,dispatch])
    return loading
}

export const useSetCategories = (setCategories:any,isFocused:any)=>{
  useEffect(()=>{
    axios.get(`${server}/product/categories`).then((res)=>{
        setCategories(res.data.categories)
    }).catch(e=>{
        Toast.show({
            type:"error",
            text1:e.response.data.message
        })
    })
  },[isFocused])
}