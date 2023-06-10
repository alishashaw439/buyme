import { Alert, Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"
import { Avatar, Text } from "react-native-paper"
import { Camera, CameraDevice, useCameraDevices } from "react-native-vision-camera"
import { Dimensions } from "react-native"
import { colors } from "../styles/styles"
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
export const CameraComponent = ({navigation,route}:{navigation:any,route:any}) => {
    const [hasPermission, setHasPermission] = useState(false)
    const devices = useCameraDevices('wide-angle-camera')
    const [cameraType, setCameraType] = useState(devices.back)
    const screenHeight = Dimensions.get('window').height;

    
    
    const options: ImageLibraryOptions = {
        mediaType: 'photo',
        quality: 1,
    };

    const openImagePicker =  () => {
        request(Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result)=>{
            if(result == RESULTS.GRANTED){
                 launchImageLibrary(options, (response) => {
                    const data = response.assets
                    console.log(data)
                    if(route.params.newProduct){
                        return navigation.navigate("newproduct",{images:data})
                    }else if(route.params.updateProduct){
                        return navigation.navigate("productimages",{images:data})
                    }else if(route.params.updateProfile){
                        return navigation.navigate("profile",{images:data})
                    }else if(route.params.signup){
                        return navigation.navigate("signup",{images:data})
                    }
                });
            }
        })
    }

const clickPicture = async() => {
    
}
useEffect(() => {
    request(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA).then((result) => {
        console.log(result)
        switch (result) {
            case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                break;
            case RESULTS.DENIED:
                Alert.alert("The permission has not been requested / is denied but requestable")
                setHasPermission(false)
                break;
            case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                break;
            case RESULTS.GRANTED:
                setHasPermission(true)
                break;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                break;
        }
    }).catch((error) => {
        console.log(error)
    });
}, [])
if(hasPermission === null) return <View/>
if(hasPermission === false) return <View style={{alignItems:"center",justifyContent:"center"}}><Text>No Access to camera</Text></View>
return (
    <View style={{
        flex: 1,
        flexDirection: 'column-reverse',
        marginBottom: screenHeight - (screenHeight - 30)
    }}>
        {
            cameraType ? (
                <Camera
                    style={{
                        flex: 1,
                        aspectRatio: 1
                    }}
                    device={cameraType}
                    isActive={true}
                    photo={true}
                />
            ) : <View></View>
        }

        <View style={{
            flexDirection: "row",
            bottom: 10,
            width: "100%",
            justifyContent: "space-evenly",
            position: 'absolute'

        }}>
            <MyIcon icon="image" handler={openImagePicker} />
            <MyIcon icon="camera" handler={clickPicture} />
            <MyIcon icon="camera-flip" handler={() => {
                setCameraType(prevType => prevType === devices.back ? devices.front : devices.back)
            }} />
        </View>
    </View>
)
}

const MyIcon = ({ icon, handler }: { icon: string, handler: any }) => {
    return (
        <TouchableOpacity onPress={handler}>
            <Avatar.Icon icon={icon} size={40}
                color={colors.color2}
                style={{
                    backgroundColor: colors.color1,
                }}
            />
        </TouchableOpacity>
    )
}