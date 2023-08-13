import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, styles } from '../styles/styles'
import { Header } from '../components/Header'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'
import { Heading } from '../components/Heading'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'

export const Cart = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {cartItems} = useSelector((state)=>state.cart)
    const incrementHandler = (id,name,price,image,stock,quantity)=>{
        const newQty = quantity + 1 
        if(stock<=quantity) return Toast.show({
            type:"error",
            text1:"Maximum value added"
        })
        dispatch({
            type:"addToCart",
            payload:{
                product:id,
                name,price,image,stock,quantity:newQty
            }
        })
    }
    const decrementHandler = (id:number,name,price,image,stock:number,quantity:number)=>{
        const newQty = quantity-1 
        if(quantity <= 1) return dispatch({
            type:"removeFromCart",
            payload:id
        })
        dispatch({
            type:"addToCart",
            payload:{
                product:id,
                name,price,image,stock,quantity:newQty
            }
        })
    }
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
                       cartItems.length > 0 ? cartItems.map((i, index) => {
                        console.log("hhh",i)
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
                        :(
                            <Text style={{textAlign:"center",fontSize:18}}>No Items yet</Text>
                        )
                    }
                </ScrollView>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 35,
            }}>
                <Text>{cartItems.length} items</Text>
                <Text>{cartItems.reduce((prev,curr)=>prev + curr.quantity * curr.price,0)}</Text>
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