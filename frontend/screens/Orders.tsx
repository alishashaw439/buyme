import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, styles } from '../styles/styles'
import { Header } from '../components/Header'
import Loader from '../components/Loader'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'
import { useGetOrders } from '../utils/hooks'
import { useIsFocused } from '@react-navigation/native'

const Orders = () => {
    const isFocused = useIsFocused()
    const {loading,orders} = useGetOrders(isFocused)
    return (
        <View style={{
            ...styles.defaultStyle,
            backgroundColor: colors.color5
        }}>
            <Header back={true} emptyCart={false} />
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>Orders</Text>
            </View>
            {
                loading ? <Loader /> : (
                    <View style={{
                        padding: 10,
                        flex: 1
                    }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {
                                orders.length > 0 ? orders.map((item, index) => (
                                    <OrderItem
                                        key={item._id}
                                        id={item._id}
                                        i={index}
                                        price={item.totalAmount}
                                        orderStatus={item.orderStatus}
                                        orderedOn={item.createdAt.split("T")[0]}
                                        paymentMethod={item.paymentMethod}
                                        address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                                    ></OrderItem>
                                )) : <Headline
                                    style={{
                                        textAlign: "center"
                                    }}
                                >No orders yet!</Headline>
                            }
                        </ScrollView>
                    </View>
                )
            }
        </View>
    )
}

export default Orders