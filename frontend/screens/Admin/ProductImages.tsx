import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, styles } from '../../styles/styles'
import { Header } from '../../components/Header'
import ImageCard from '../../components/ImageCard'
import { Avatar, Button } from 'react-native-paper'

const ProductImages = ({navigation,route}:{navigation:any,route:any}) => {
  const [images] = useState(route.params.images)
  const [productId] = useState(route.params.id)
  const [image,setImage] = useState("")
  const [imageChange,setImageChange] = useState(false)
  const loading = false
  useEffect(()=>{
    if(route.params.images){
        setImage(route.params.images[0].uri)
        setImageChange(true)
    }
},[route.params])
  const submitHandler=()=>{
 console.log("presss")
  }
  const deleteProductHandler=(id:any)=>{
    console.log("image id",id)
    console.log("product id",productId)
  }
  return (
    <View style={{
      ...styles.defaultStyle,
      backgroundColor: colors.color5,
    }}>
      <Header back={true} emptyCart={false} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={styles.heading}>Images</Text>
      </View>
      <ScrollView style={{
        marginBottom:20,
      }}>
        <View style={{
          backgroundColor:colors.color2,
          padding:40,
          minHeight:400,
        }}>
          {
            images.map((i:any)=>(
              <ImageCard 
               src={i.url}
               id={i._id}
               deleteHandler={deleteProductHandler}
              />
            ))
          }
        </View>
      </ScrollView>
      <View style={{
            padding:20,
            borderRadius:10,
            backgroundColor:colors.color3
          }}>
            <Image style={{
               backgroundColor:colors.color2,
               width:100,
               height:100,
               alignSelf:"center",
               resizeMode:"contain",
            }} source={{
              uri:image
            }}/>
            <View style={{
              flexDirection:"row",
              justifyContent:"center",
            }}>
              <TouchableOpacity
              activeOpacity={0.8}
               onPress={()=>navigation.navigate("camera",{updateProduct:true})}>
                <Avatar.Icon 
                style={{
                  backgroundColor:colors.color2,
                  margin:10
                }}
                icon={"camera"} size={30}
                color={colors.color3}
                />
              </TouchableOpacity>
            </View>
            <Button style={{
              backgroundColor:colors.color1,
              padding:6
            }}
            textColor={colors.color2}
            loading={loading}
            onPress={submitHandler}
            disabled={imageChange}
            >Add</Button>
          </View>
    </View>
  )
}

export default ProductImages