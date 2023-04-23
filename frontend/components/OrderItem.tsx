import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

type props = {
    id: string,
    price: number,
    address: string,
    orderStatus: string,
    orderedOn: string,
    updateHandler: (id: string) => void,
    admin: false,
    loading: boolean,
    i: 0
}
const OrderItem = (props: any) => {
    const TextBox = ({ title, value, i }: { title: string, value: string, i: number }) => (
        <Text
            style={{
                marginVertical: 6,
                color: i % 2 === 0 ? colors.color3 : colors.color2
            }}
        >
            <Text style={{ fontWeight: "900" }}>{title} - </Text>
            {title === "Price" ? "₹" : ""}
            {value}
        </Text>
    )
    return (
        <View style={{
            ...orderStyle.container,
            backgroundColor: props.i % 2 === 0 ? colors.color2 : colors.color3
        }}>
            <Text
                style={{
                    ...orderStyle.text,
                    backgroundColor: props.i % 2 === 0 ? colors.color3 : colors.color1
                }}
            >ID - {props.id}</Text>
            <TextBox title={"Address"} value={props.address} i={props.i} />
            <TextBox title={"Ordered On"} value={props.orderedOn} i={props.i} />
            <TextBox title={"Price"} value={props.price} i={props.i} />
            <TextBox title={"Status"} value={props.orderStatus} i={props.i} />
            <TextBox title={"Payment Method"} value={props.paymentMethod} i={props.i} />
            {
                props.admin && (
                    <Button icon={"update"} mode={"contained"} style={{
                        marginTop: 20,
                        backgroundColor: props.i % 2 === 0 ? colors.color3 : colors.color2
                    }} textColor={props.i % 2 === 0 ? colors.color2 : colors.color3}
                        onPress={() => props.updateHandler(props.id)}
                        loading={props.loading}
                        disabled={props.loading}
                    >
                        Update
                    </Button>
                )
            }
        </View>
    )
}

const orderStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        elevation: 5,
    },
    text: {
        color: colors.color2,
        fontSize: 16,
        fontWeight: "900",
        marginHorizontal: -20,
        marginTop: -20,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
})

export default OrderItem