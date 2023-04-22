import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'

const Login = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = () => {
        Alert.alert("submitted")
    }
    const loading = true
    return (
<>
        <View style={{...styles.defaultStyle,backgroundColor:colors.color2}}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={loginStyle.heading}>Login</Text>
                </View>
                <View style={loginStyle.container}>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    ></TextInput>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    ></TextInput>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("forgotPassword")}>
                        <Text style={loginStyle.forgetText}>Forget Password</Text>
                    </TouchableOpacity>
                    <Button 
                     loading={loading}
                        textColor={colors.color2}
                        disabled={email === "" || password === ""}
                        onPress={submitHandler}
                        style={loginStyle.loginBtn}>Log In</Button>
                        <Text style={loginStyle.orTextStyle}>OR</Text>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=> navigation.navigate("signup")}
                        >
                            <Text style={loginStyle.link}>Sign Up</Text>
                        </TouchableOpacity>
                </View>
               
            </SafeAreaView>
        </View>
         <Footer activeRoute='profile'></Footer>
         </>
    )
}

const loginStyle = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: colors.color3,
        color: colors.color2,
        padding: 5,
        borderRadius: 5
    },
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: colors.color3,
        borderRadius: 10,
        justifyContent: "center",
        elevation: 10
    },
    forgetText: {
        color: colors.color2,
        marginVertical: 10,
        marginHorizontal: 20,
        alignSelf: "flex-end",
        fontWeight: 100
    },
    loginBtn: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6,

    },
    orTextStyle:{
        alignSelf:"center",
        fontSize:20,
        fontWeight:100,
        color:colors.color2
    },
    link:{
        color:colors.color2,
        alignSelf:"center",
        fontSize:18,
        textTransform:'uppercase',
        marginVertical:10,
        marginHorizontal:20
    }
})

export default Login