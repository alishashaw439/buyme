import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'

const ButtonBox = ({icon,text,handler,reverse=false,loading=false}:{
    icon:string,text:string,handler:(text:string)=>void,
    reverse:boolean,loading:boolean
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{
        backgroundColor:reverse?colors.color1:colors.color3,
        height:80,
        width:80,
        borderRadius:20,
        alignItems:"center"
    }}
    onPress={()=>handler(text)}
    disabled={loading}
    >
        <Avatar.Icon size={50} icon={icon} color={colors.color2} style={{
            backgroundColor:reverse?colors.color1:colors.color3
        }}/>
        <Text style={{color:colors.color2,textAlign:"center"}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonBox