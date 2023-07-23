import { View, Text, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors, styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import { Header } from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../redux/actions/otherAction'
import { useMessageAndErrorOther } from '../utils/hooks'


export const UpdateProfile = ({ navigation }: { navigation: any }) => {

   const {user} = useSelector(state=>state.user)

    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [address, setAddress] = useState(user?.address)
    const [city, setCity] = useState(user?.city)
    const [pincode, setPincode] = useState(user?.pincode.toString())
    const [country, setCountry] = useState(user?.country)

    const dispatch = useDispatch()
    const submitHandler = () => {
       dispatch(updateProfile(name,email,address,city,country,pincode))
    }
   const loading = useMessageAndErrorOther(dispatch,navigation,"profile")

    return (
        <View style={{...styles.defaultStyle,backgroundColor:colors.color2}}>
            <SafeAreaView style={{ flex: 1 }}>
              <Header back={true} emptyCart={false}/>
                <View style={{ marginBottom: 20,paddingTop:70 }}>
                    <Text style={styles.heading}>Edit Profile</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    padding:20,elevation:10,borderRadius:10,
                    backgroundColor:colors.color3
                }}
                >
                <View>
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
                        value={email}
                        onChangeText={setEmail}
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
                        onPress={submitHandler}
                        style={styles.formBtn}>Update</Button>
                </View>
                </ScrollView>
              
               
            </SafeAreaView>
        </View>
    )
}
