import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'
import { useMessageAndErrorUser } from '../utils/hooks'
import { useSelector } from 'react-redux'

const Footer = ({ activeRoute = "home" }) => {
    const navigation = useNavigation()
    const {loading,isAuthenticated} = useSelector(state => state.user)
    const navigationHandler = (key:number) => {
        switch(key){
            case 0:
                navigation.navigate("home")
                break;
            case 1:
                navigation.navigate("cart")
                break;
            case 2:
                if(isAuthenticated){
                    navigation.navigate("profile")
                }else{
                    navigation.navigate("login")
                }
                break;
            default:
                navigation.navigate("home")
                break;
        }
    }
    return (
        <>
        {loading === false && (
            <View
            style={{
                backgroundColor: colors.color1,
                borderTopLeftRadius: 120,
                borderTopRightRadius: 120
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                }}
            >
                <TouchableOpacity activeOpacity={0.8} onPress={() => { navigationHandler(1) }}>
                    <Avatar.Icon
                        color={colors.color2}
                        size={50}
                        style={{ backgroundColor: colors.color1 }}
                        icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}></Avatar.Icon>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { navigationHandler(2) }}>
                    <Avatar.Icon
                        color={colors.color2}
                        size={50}
                        style={{ backgroundColor: colors.color1 }}
                        icon={ isAuthenticated === false ? "login" :
                            activeRoute === "profile" ?
                            "account" : "account-outline" }></Avatar.Icon>
                </TouchableOpacity>
            </View>
            <View style={{
                position: "absolute",
                width: 80,
                height: 80,
                backgroundColor: colors.color2,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                top: -50,
                alignSelf: "center"
            }}>
                <View style={{
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { navigationHandler(0) }}>
                        <Avatar.Icon
                            color={colors.color2}
                            size={50}
                            style={{ backgroundColor: colors.color1 }}
                            icon={activeRoute === "home" ? "home" : "home-outline"}></Avatar.Icon>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )}
        </>
       
    )
}

export default Footer