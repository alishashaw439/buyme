import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'

const CartItem = (
    { name, id, stock, qty, amount, image, index, incrementHandler, decrementHandler,navigation }:
        {
            name: string, id: number, stock: number, qty: number,navigation:any,
            amount: number, image: string, index: number, incrementHandler: (id:number,qty:number,stock:number) => void, decrementHandler: (id:number,qty:number) => void
        }
) => {
    return (
        <View style={{
            flexDirection: "row",
            height: 100,
            marginVertical: 20
        }}>
            <View style={{
                width: "40%",
                backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100
            }}>
                <Image source={{
                    uri: image
                }}
                    style={{
                        width: 200,
                        height: "100%",
                        resizeMode: "contain",
                        top: -20,
                        left: 20
                    }}
                />
            </View>
            <View style={{
                width: "40%",
                paddingHorizontal: 25
            }}
            >
                <Text numberOfLines={1} style={{
                    fontSize: 17
                }} 
                onPress={()=>navigation.navigate("productdetails",{id})}
                >{name}</Text>
                <Text numberOfLines={1} style={{
                    fontSize: 17,
                    fontWeight: "900"
                }}
                onPress={()=>navigation.navigate("productdetails",{id})}
                >₹{amount}</Text>
            </View>
            <View style={{
                alignItems: "center",
                width: "20%",
                height: 80,
                justifyContent: "space-between",
                alignSelf: "center"
            }}>
                <TouchableOpacity onPress={() => decrementHandler(id, qty)}>
                    <Avatar.Icon icon={"minus"} size={20} style={{
                        borderRadius: 5,
                        backgroundColor: colors.color5,
                        height: 25,
                        width: 25
                    }} />
                </TouchableOpacity>
                <Text style={{
                    backgroundColor: colors.color4,
                    height: 25,
                    width: 25,
                    textAlignVertical: "center",
                    textAlign: "center",
                    borderWidth: 1,
                    borderColor: colors.color5
                }}>{qty}</Text>
                <TouchableOpacity onPress={() => incrementHandler(id, qty, stock)}>
                    <Avatar.Icon icon={"plus"} size={20} style={{
                        borderRadius: 5,
                        backgroundColor: colors.color5,
                        height: 25,
                        width: 25
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem