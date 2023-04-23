import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'

export const ForgotPassword = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState("")
    const submitHandler = () => {
        Alert.alert("send OTP")
        //TODO
        navigation.navigate("verify")
    }
    const loading = false
    return (
<>
        <View style={{...styles.defaultStyle,backgroundColor:colors.color2}}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.heading}>Forgot Password</Text>
                </View>
                <View style={styles.container}>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    ></TextInput>
                    <Button 
                     loading={loading}
                        textColor={colors.color2}
                        disabled={email === ""}
                        onPress={submitHandler}
                        style={styles.formBtn}>Send OTP</Button>
                        <Text style={styles.orTextStyle}>OR</Text>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=> navigation.navigate("login")}
                        >
                            <Text style={styles.link}>Log In</Text>
                        </TouchableOpacity>
                </View>
               
            </SafeAreaView>
        </View>
         <Footer activeRoute='profile'></Footer>
         </>
    )
}
