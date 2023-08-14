import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../styles/styles'
import { Header } from '../components/Header'
import { Heading } from '../components/Heading'
import { Button, RadioButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../redux/actions/otherAction'
import { useMessageAndErrorOther } from '../utils/hooks'
import {useStripe} from "@stripe/stripe-react-native"
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import axios from 'axios'
import { server } from '../redux/store'
import Loader from '../components/Loader'

const Payment = ({navigation,route}:{navigation:any,route:any}) => {
 const [paymentMethod,setPaymentMethod] = useState("COD")
 const [loaderLoading,setLoaderLoading] = useState(false)
 const dispatch = useDispatch()
 const stripe = useStripe()
 const {user,isAuthenticated} = useSelector(state=>state.user)
 const {cartItems} = useSelector(state=>state.cart)
 const redirectToLogin = ()=>{
   navigation.navigate("login")
 }
 const codHandler = (paymentInfo?:any)=>{
    const shippingInfo = {
      address:user.address,
      city:user.city,
      country:user.country,
      pinCode:Number(user.pincode)
    }
    const itemsPrice = route.params.itemsPrice
    const shippingCharges = route.params.shippingCharges
    const taxPrice = route.params.tax
    const totalAmount = route.params.totalAmount
    dispatch(placeOrder(shippingInfo,cartItems,paymentMethod,paymentInfo,itemsPrice,taxPrice,shippingCharges,totalAmount))
 }
 const onlineHandler = async()=>{
   try{
      const {data:{client_secret}} = await axios.post(`${server}/order/payment`,
      {
         totalAmount:route.params.totalAmount
      },
      {
         headers:{
            "Content-Type":"application/json"
         },
         withCredentials:true
      }
      )
    const init = await stripe.initPaymentSheet({
      paymentIntentClientSecret:client_secret,
      merchantDisplayName:"AlishaManufacture"
    })
    if(init.error){
      return Toast.show({
         type:"error",
         text1:init.error.message
      })
    }
    const presentSheet = await stripe.presentPaymentSheet()
    setLoaderLoading(true)
    if(presentSheet.error){
      setLoaderLoading(false)
      return Toast.show({
         type:"error",
         text1:presentSheet.error.message
      })
    }

    const {paymentIntent} = await stripe.retrievePaymentIntent(client_secret)
    if(paymentIntent?.status==="Succeeded"){
      codHandler({id:paymentIntent.id,status:paymentIntent.status})
    }
   }catch(error){
      return Toast.show({
         type:"erroe",
         text1:"Some Error has occurred",
         text2: error
      })
   }
 }
 const loading = useMessageAndErrorOther(dispatch,navigation,"profile",()=>({
   type:"clearCart"
 }))
  return (
   loaderLoading ? <Loader/> : (
      <View style={styles.defaultStyle}>
      <Header back={true} emptyCart={false}/>
      <View style={{
        paddingTop:70
      }}> 
       <Heading text1='Payment' text2='Method'></Heading>
      </View>
     <View style={paymentStyle.container}>
        <RadioButton.Group
        onValueChange={setPaymentMethod}
         value={paymentMethod}
        >
            <View style={paymentStyle.radioStyle}>
                <Text style={paymentStyle.radioStyleText}>Cash on Delivery</Text>
                    <RadioButton 
                    color={colors.color1} value={"COD"}></RadioButton>
            </View>
            <View style={paymentStyle.radioStyle}>
                <Text style={paymentStyle.radioStyleText}>Online</Text>
                    <RadioButton 
                    color={colors.color1} value={"ONLINE"}></RadioButton>
            </View>
        </RadioButton.Group>
     </View>
     <TouchableOpacity
     disabled={loading}
     onPress={()=>{
        console.log("preesed")
         !isAuthenticated ? redirectToLogin() : paymentMethod === "COD" ? codHandler({}) : onlineHandler()
     }}
     >
        <Button
        loading={loading}
        disabled={loading}
        icon={paymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"}
        style={paymentStyle.btn}
        textColor={colors.color2}
        >
            {
                paymentMethod === "COD" ? "Place Order" : "Pay"
            }
        </Button>
     </TouchableOpacity>
    </View>
   )
  )
}
const paymentStyle = StyleSheet.create({
     container:{
        backgroundColor:colors.color3,
        padding:30,
        borderRadius:10,
        marginVertical:20,
        flex:1,
        justifyContent:"center"
     },
     radioStyle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:5,
     },
     radioStyleText:{
        fontWeight:"600",
        fontSize:20,
        textTransform:"uppercase",
        color:colors.color2
     },
     btn:{
        backgroundColor:colors.color3,
        borderRadius:100,
        margin:10,
        padding:5
     }
})
export default Payment