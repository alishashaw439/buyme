import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../styles/styles'
import { Header } from '../components/Header'
import { Heading } from '../components/Heading'
import { Button, RadioButton } from 'react-native-paper'

const Payment = ({navigation,route}:{navigation:any,route:any}) => {
 const [paymentMethod,setPaymentMethod] = useState("COD")
 const isAuthenticated = true
 const redirectToLogin = ()=>{
   
 }
 const codHandler = ()=>{
    
 }
 const onlineHandler = ()=>{
    
 }
  return (
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
     onPress={()=>{
        !isAuthenticated ? redirectToLogin : paymentMethod === "COD" ? codHandler:onlineHandler
     }}
     >
        <Button
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
        fontSize:10,
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