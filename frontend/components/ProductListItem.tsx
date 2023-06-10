import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'
import MyModal from './MyModal'

const ProductListItem = ({
  id,
  i,
  key,
  deleteHandler,
  price,
  stock,
  name,
  category,
  imageSrc}:{
  id: any,
  key:any,
  i: number
  deleteHandler: (id:any) => void,
  price: number,
  stock: number
  name: string
  category: any,
  imageSrc: string
  }) => {
  const [openModal,setOpenModal] = useState(false)
  const navigation = useNavigation()
  return (
    <>
      <TouchableOpacity
        onLongPress={()=>setOpenModal((prev)=>!prev)}
        onPress={() => navigation.navigate("productdetails",{id})}>

        <View style={{
          ...styles.container,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3
        }}>
          <Image style={{
            width: 40,
            height: 40,
            resizeMode: "contain"
          }} source={{ uri: imageSrc }} />

          <Text style={{
            width: 60,
            color: colors.color2
          }}
            numberOfLines={1}
          >₹{price}</Text>


          <Text style={{
            maxWidth: 120,
            color: colors.color2
          }}
            numberOfLines={1}
          >{name}</Text>

          <Text style={{
            width: 60,
            color: colors.color2
          }}
            numberOfLines={1}
          >{category}</Text>

          <Text style={{
            width: 40,
            color: colors.color2
          }}
            numberOfLines={1}
          >{stock}</Text>

        </View>
      </TouchableOpacity>
      {
        openModal && (
          <MyModal
          id={id}
          deleteHandler={deleteHandler}
          navigate={navigation}
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