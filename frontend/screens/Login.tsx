import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import {useDispatch} from "react-redux"
import { login } from '../redux/actions/userAction'
import { useMessageAndErrorUser } from '../utils/hooks'

const Login = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const loading = useMessageAndErrorUser(navigation,dispatch,"profile")
    const submitHandler = () => {
        dispatch(login(email,password))
    }

    return (
<>
        <View style={{...styles.defaultStyle,backgroundColor:colors.color2}}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.heading}>Login</Text>
                </View>
                <View style={styles.container}>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    ></TextInput>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Password"
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    ></TextInput>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("forgotpassword")}>
                        <Text style={styles.forgetText}>Forgot Password</Text>
                    </TouchableOpacity>
                    <Button 
                     loading={loading}
                        textColor={colors.color2}
                        disabled={email === "" || password === ""}
                        onPress={submitHandler}
                        style={styles.formBtn}>Log In</Button>
                        <Text style={styles.orTextStyle}>OR</Text>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=> navigation.navigate("signup")}
                        >
                            <Text style={styles.link}>Sign Up</Text>
                        </TouchableOpacity>
                </View>
               
            </SafeAreaView>
        </View>
         <Footer activeRoute='profile'></Footer>
         </>
    )
}

export default Login