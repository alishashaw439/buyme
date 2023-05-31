import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, styles } from '../../styles/styles'
import { Header } from '../../components/Header'
import { Headline } from 'react-native-paper'
import Loader from '../../components/Loader'
import OrderItem from '../../components/OrderItem'
import { orders } from '../Orders'

const AdminOrders = () => {
    const loading = false
    const processOrderLoading = false
    const updateHandler = () => {

    }
    return (
        <View style={{
            ...styles.defaultStyle,
            backgroundColor: colors.color5
        }}>
            <Header back={true} emptyCart={false} />

            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={styles.heading}>All Orders</Text>
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
                                        key={item.id}
                                        id={item.id}
                                        i={index}
                                        price={item.totalAmount}
                                        orderStatus={item.orderStatus}
                                        orderedOn={item.createdAt.split("T")[0]}
                                        paymentMethod={item.paymentMethod}
                                        address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pincode}`}
                                        admin={true}
                                        updateHandler={updateHandler}
                                        loading={processOrderLoading}
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

export default AdminOrders