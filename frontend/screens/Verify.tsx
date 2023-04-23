import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'

export const Verify = ({ navigation }: { navigation: any }) => {
    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = () => {
        Alert.alert("send OTP")
        //TODO
        navigation.navigate("login")
    }
    const loading = false
    return (
<>
        <View style={{...styles.defaultStyle,backgroundColor:colors.color2}}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.heading}>Reset Password</Text>
                </View>
                <View style={styles.container}>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="OTP"
                        keyboardType="number-pad"
                        value={otp}
                        onChangeText={setOtp}
                    ></TextInput>
                     <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="New Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    ></TextInput>
                    <Button 
                     loading={loading}
                        textColor={colors.color2}
                        disabled={otp === "" || password === ""}
                        onPress={submitHandler}
                        style={styles.formBtn}>Reset Password</Button>
                        <Text style={styles.orTextStyle}>OR</Text>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=> navigation.navigate("forgotpassword")}
                        >
                            <Text style={styles.link}>Resend OTP</Text>
                        </TouchableOpacity>
                </View>
               
            </SafeAreaView>
        </View>
         <Footer activeRoute='profile'></Footer>
         </>
    )
}
