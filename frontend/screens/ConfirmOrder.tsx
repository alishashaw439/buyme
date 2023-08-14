import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../styles/styles'
import { Header } from '../components/Header'
import { Heading } from '../components/Heading'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const ConfirmOrder = () => {
    const navigation = useNavigation()
    const {cartItems} = useSelector((state)=>state.cart)
    const [itemsPrice] = useState(cartItems.reduce((prev,curr)=>prev + curr.quantity * curr.price,0))
    const [shippingCharges] = useState(itemsPrice>10000?0:200)
    const [tax] = useState(Number((0.18 * itemsPrice).toFixed()))
    const [totalAmount] = useState(itemsPrice + shippingCharges + tax)
  return (
    <View style={{...styles.defaultStyle,padding:0}}>
        <Header back={true} emptyCart={false}/>
        <View style={{
            paddingTop: 100,
            marginLeft: 35
        }}>
         <Heading text1={"Confirm"} text2={"Order"}/>
         </View>
         <View style={{
            paddingVertical:20,
            flex:1,
         }}>
            
            <ScrollView>
                {
                    cartItems.map((i)=>{
                        return(
                            <ConfirmOrderItem
                            key={i.product}
                            price={i.price}
                            image={i.image}
                            name={i.name}
                            quantity={i.quantity}
                            />
                        );
                    })
                }
            </ScrollView>
         </View>
       
        <PriceTag heading='Subtotal' value={itemsPrice}/>
        <PriceTag heading='Shipping' value={shippingCharges}/>
        <PriceTag heading='Tax' value={tax}/>
        <PriceTag heading='Total' value={totalAmount}/>

        <TouchableOpacity onPress={()=>navigation.navigate("payment",{itemsPrice,shippingCharges,tax,totalAmount}) }>
            <Button style={{
                backgroundColor:colors.color3,
                borderRadius:100,
                padding:5,
                margin:10
            }}
            textColor={colors.color2}
            icon={"chevron-right"}
            >Payment</Button>
        </TouchableOpacity>
    </View>
  )
}

const PriceTag = ({heading,value}:{heading:string,value:number}) => {
    return(
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginVertical:10,
            marginHorizontal:10
        }}>
            <Text style={{fontWeight:"800"}}>{heading}</Text>
            <Text>₹{value}</Text>
        </View>
    );
}

export default ConfirmOrder