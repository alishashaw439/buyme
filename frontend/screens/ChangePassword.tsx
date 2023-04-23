import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import { Header } from '../components/Header'

export const ChangePassword = ({ navigation }: { navigation: any }) => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const submitHandler = () => {
        Alert.alert("submitted")
    }
    const loading = false
    return (
        <View style={{ ...styles.defaultStyle, backgroundColor: colors.color2 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Header back={true} emptyCart={false} />
                <View style={{ marginBottom: 20, paddingTop: 70 }}>
                    <Text style={styles.heading}>Change Password</Text>
                </View>
                <View style={styles.container}>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Old Password"
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        secureTextEntry={true}
                    ></TextInput>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="New Password"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={true}
                    ></TextInput>
                    <Button
                        loading={loading}
                        textColor={colors.color2}
                        disabled={oldPassword === "" || newPassword === ""}
                        onPress={submitHandler}
                        style={styles.formBtn}>Change Password</Button>
                </View>
            </SafeAreaView>
        </View>
    )
}
