import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, styles } from '../styles/styles'
import { Avatar, Button } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useMessageAndErrorUser } from '../utils/hooks'
import { logout } from '../redux/actions/userAction'
import { loadUser } from '../redux/actions/userAction'
import { useIsFocused } from '@react-navigation/native'

const user = {
    name: "Alisha",
    email: "test@gmail.com"
}

export const Profile = ({ navigation, route }: { navigation: any, route: any }) => {
    const { user } = useSelector(state => state.user)
    const [avatar, setAvatar] =
        useState(user?.avatar ? user.avatar.url : "")
    const dispatch = useDispatch()
    const isFocused = useIsFocused()
    const loading = useMessageAndErrorUser(navigation, dispatch,"login")
    const logoutHandler = () => {
        dispatch(logout())
    }
    const navigateHandler = (text: string) => {
        switch (text) {
            case "Admin":
                navigation.navigate("adminpanel", { navigation })
                break;
            case "Orders":
                navigation.navigate("orders")
                break;
            case "Profile":
                navigation.navigate("updateProfile")
                break;
            case "Password":
                navigation.navigate("changePassword")
                break;
            case "Sign Out":
                logoutHandler()
                break;
            default:
            case "Orders":
                navigation.navigate("orders")
                break;
        }
    }

    useEffect(() => {
        if (route.params) {
            if (route.params.images) {
                setAvatar(route.params.images[0].uri)
            }
        }
        dispatch(loadUser())
    }, [route.params,dispatch,isFocused])
    return (
        <>
            <View style={styles.defaultStyle}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.heading}>Profile</Text>
                </View>
                {/* Loading */}
                {
                    loading ? <Loader /> : (
                        <>
                            <View style={profileStyles.container}>
                                <Avatar.Image
                                    size={100}
                                    source={{
                                        uri: avatar
                                    }}
                                    style={{ backgroundColor: colors.color1 }}
                                />
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate("camera", { updateProfile: true })}>
                                    <Button textColor={colors.color1}>Change Photo</Button>
                                </TouchableOpacity>
                                <Text style={profileStyles.nameStyle}>{user?.name}</Text>
                                <Text style={{
                                    fontWeight: "300",
                                    color: colors.color2
                                }}>{user?.email}</Text>
                            </View>
                            <View>
                                <View style={{
                                    flexDirection: "row",
                                    margin: 10,
                                    justifyContent: "space-between"
                                }}>
                                    <ButtonBox
                                        text={"Orders"}
                                        icon={"format-list-bulleted-square"}
                                        handler={navigateHandler}
                                    />
                                    {
                                        user?.role === "admin" && (
                                            <ButtonBox
                                                reverse={true}
                                                icon={"view-dashboard"}
                                                text={"Admin"}
                                                handler={navigateHandler}
                                            />
                                        )
                                    }

                                    <ButtonBox
                                        text={"Profile"}
                                        handler={navigateHandler}
                                        icon={"pencil"}
                                    />
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    margin: 10,
                                    justifyContent: "space-evenly"
                                }}>
                                    <ButtonBox
                                        text={"Password"}
                                        handler={navigateHandler}
                                        icon={"pencil"}
                                    />
                                    <ButtonBox
                                        text={"Sign Out"}
                                        handler={navigateHandler}
                                        icon={"exit-to-app"}
                                    />
                                </View>
                            </View>
                        </>
                    )
                }
            </View>
            <Footer />
        </>
    )
}

const profileStyles = StyleSheet.create({
    container: {
        elevation: 7,
        backgroundColor: colors.color3,
        padding: 30,
        borderRadius: 10,
        alignItems: "center"
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 500,
        marginTop: 10,
        color: colors.color2
    }
})
