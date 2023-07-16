import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Button, TextInput } from 'react-native-paper'
import Footer from '../components/Footer'
import mime from "mime"
import { useDispatch } from 'react-redux'
import { register } from '../redux/actions/userAction'
import { useMessageAndErrorUser } from '../utils/hooks'

export const SignUp = ({ navigation,route }: { navigation: any,route:any }) => {
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [country, setCountry] = useState("")

    const disabledbtn = !name || !email || !password || !address || !city || !pincode || !country
    const dispatch = useDispatch()
    const loading = useMessageAndErrorUser(navigation,dispatch,"profile")
    const submitHandler = () => {
       const formData = new FormData()
       formData.append("name",name)
       formData.append("email",email)
       formData.append("password",password)
       formData.append("address",address)
       formData.append("city",city)
       formData.append("pincode",pincode)
       formData.append("country",country)

       if(avatar !== ""){
        formData.append("file",{
            uri:avatar,
            type:mime.getType(avatar),
            name:avatar.split("/").pop()
        })
       }
       dispatch(register(formData))
    }

    useEffect(()=>{
        if(route.params){
            if(route.params.images){
                setAvatar(route.params.images[0].uri)
            }
        }
    },[route.params])
    return (
<>
        <View style={{...styles.defaultStyle,backgroundColor:colors.color2}}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.heading}>Sign Up</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    padding:20,elevation:10,borderRadius:10,
                    backgroundColor:colors.color3
                }}
                >
                <View style={{minHeight:900}}>
                    <Avatar.Image
                    style={{alignSelf:"center",
                    backgroundColor:colors.color1,
                }}
                size={80}
                source={{
                    uri:avatar
                }}
                    />
                    <TouchableOpacity onPress={()=>navigation.navigate("camera",{signup:true})}>
                        <Button textColor={colors.color2}>Change Photo</Button>
                    </TouchableOpacity>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Name"
                        keyboardType="default"
                        value={name}
                        onChangeText={setName}
                    ></TextInput>
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
                        value={password}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    ></TextInput>
                    <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Address"
                        value={address}
                        onChangeText={setAddress}
                    ></TextInput>
                     <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                    ></TextInput>
                      <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Pincode"
                        value={pincode}
                        onChangeText={setPincode}
                    ></TextInput>
                     <TextInput style={styles.inputStyling}
                        mode={"outlined"}
                        activeOutlineColor={colors.color1}
                        placeholder="Country"
                        value={country}
                        onChangeText={setCountry}
                    ></TextInput>
                    <Button 
                     loading={loading}
                        textColor={colors.color2}
                        disabled={disabledbtn}
                        onPress={submitHandler}
                        style={styles.formBtn}>Sign Up</Button>
                        <Text style={styles.orTextStyle}>OR</Text>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=> navigation.navigate("login")}
                        >
                            <Text style={styles.link}>Log In</Text>
                        </TouchableOpacity>
                </View>
                </ScrollView>
              
               
            </SafeAreaView>
        </View>
         <Footer activeRoute='profile'></Footer>
         </>
    )
}
