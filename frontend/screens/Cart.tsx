import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import { Header } from '../components/Header'


const Cart = () => {
  return (
    <View style={{
        ...styles.defaultStyle,
        padding:0
    }}>
     <Header emptyCart={true} back={true}/>
     <Heading/>
    </View>
  )
}

const Heading = () =>{
    return (
        <View style={{
            paddingTop:100,
            marginLeft:35
        }}>
            <Text style={{ fontSize: 25 }}>Shopping</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Cart</Text>
        </View>
    );
}

export default Cart