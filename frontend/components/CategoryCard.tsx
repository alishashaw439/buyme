import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Avatar } from 'react-native-paper'

const CategoryCard = ({name,id,deleteHandler}:{name:string,id:string,deleteHandler:(id:string)=>void}) => {
  return (
    <View style={styles.cardContainer} >
      <Text style={styles.cardText}>{name}</Text>
      <TouchableOpacity onPress={()=>deleteHandler(id)}>
        <Avatar.Icon 
        icon={"delete"}
        size={30}
        style={{
            backgroundColor:colors.color1
        }}
        ></Avatar.Icon>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:colors.color2,
        elevation:5,
        margin:10,
        padding:15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3
    },
    cardText:{
        fontWeight:"600",
        textTransform:"uppercase",
        letterSpacing:1
    }
})
export default CategoryCard