import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'
import MyModal from './MyModal'

type props = {
  navigation:any,
  id: any,
  i: number,
  deleteHandler: (id:any) => void,
  price: number,
  stock: number
  name: string
  category: any,
  imageSrc: string
}
const ProductListItem = (props:any) => {
  const [openModal,setOpenModal] = useState(false)

  return (
    <>
      <TouchableOpacity
        onLongPress={()=>setOpenModal((prev)=>!prev)}
        onPress={() => props.navigation.navigate("productdetails",props.id)}>

        <View style={{
          ...styles.container,
          backgroundColor: props.i % 2 === 0 ? colors.color1 : colors.color3
        }}>
          <Image style={{
            width: 40,
            height: 40,
            resizeMode: "contain"
          }} source={{ uri: props.imageSrc }} />

          <Text style={{
            width: 60,
            color: colors.color2
          }}
            numberOfLines={1}
          >₹{props.price}</Text>


          <Text style={{
            maxWidth: 120,
            color: colors.color2
          }}
            numberOfLines={1}
          >{props.name}</Text>

          <Text style={{
            width: 60,
            color: colors.color2
          }}
            numberOfLines={1}
          >{props.category}</Text>

          <Text style={{
            width: 40,
            color: colors.color2
          }}
            numberOfLines={1}
          >{props.stock}</Text>

        </View>
      </TouchableOpacity>
      {
        openModal && (
          <MyModal
          id={props.id}
          deleteHandler={props.deleteHandler}
          navigate={props.navigation}
          setOpenModal={setOpenModal}
          />
        )
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10
  }
})

export default ProductListItem