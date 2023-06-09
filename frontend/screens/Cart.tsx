import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, styles } from '../styles/styles'
import { Header } from '../components/Header'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'
import { Heading } from '../components/Heading'

export const cartItems = [
    {
        name: "Minion",
        image: "https://www.pngmart.com/files/12/Bob-Minion-Transparent-PNG.png",
        product: 543,
        stock: 4,
        price: 500,
        quantity: 2
    },
    {
        name: "Minion kevin",
        image: "https://www.pngmart.com/files/12/Stuart-Minion-PNG-Pic.png",
        product: 546,
        stock: 10,
        price: 503,
        quantity: 4
    }
]

const incrementHandler = (id:number,qty:number,stock:number)=>{
    console.log("increasing",id,qty,stock)
  
}
const decrementHandler = (id:number,qty:number)=>{
    console.log("decreasing",id,qty)
}

export const Cart = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            ...styles.defaultStyle,
            padding: 0
        }}>
            <Header emptyCart={true} back={true} />
            <View style={{
            paddingTop: 100,
            marginLeft: 35
        }}>
            <Heading text1="Shopping" text2="Cart"/>
            </View>
          
            <View style={{
                paddingVertical: 20,
                flex: 1,
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cartItems.map((i, index) => {
                            return (
                                <CartItem
                                navigation={navigation}
                                key={i.product}
                                id={i.product}
                                name={i.name}
                                stock={i.stock}
                                amount={i.price}
                                image={i.image}
                                index={index}
                                qty={i.quantity}
                                incrementHandler={incrementHandler}
                                decrementHandler={decrementHandler}
                                ></CartItem>
                            );
                        })
                    }
                </ScrollView>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 35,
            }}>
                <Text>5 items</Text>
                <Text>₹500</Text>
            </View>
            <TouchableOpacity onPress={()=> cartItems.length > 0 ? navigation.navigate("confirmorder") : null}>
                <Button
                    style={{
                        backgroundColor: colors.color3,
                        borderRadius: 100,
                        padding: 5,
                        margin: 30
                    }}
                    icon="cart"
                    textColor={colors.color2}
                >Checkout</Button>
            </TouchableOpacity>
        </View>
    )
}

export default Cart