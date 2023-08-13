import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors, styles } from '../styles/styles'
import { Header } from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import Carousel from 'react-native-snap-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { getProductDetails } from '../redux/actions/productAction'

const SLIDER_WIDTH = Dimensions.get("window").width
const horizontalMargin = 20;
const ITEM_WIDTH = Dimensions.get("window").width

// const name = "Minion"
// const price = 300
// const stock = 5
// const description = "Minions are an all-male species of fictional yellow creatures that appear in Illumination's Despicable Me franchise. They are characterized by their childlike behavior and their language, which is largely unintelligible."
// const images = [
//     {
//         _id:"241",
//         url:"https://www.pngmart.com/files/12/Bob-Minion-Transparent-PNG.png"
//     },
//     {
//         _id:"242",
//         url:"https://www.pngmart.com/files/12/Stuart-Minion-PNG-Pic.png"
//     }
// ]
const ProductDetails = ({route}:{route:any}) => {
  const carouselRef = useRef(null)
  const [quantity,setQuantity] = useState(1)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const {product:{
    name,price,stock,description,images
  }} = useSelector((state)=>state.product)
  const incrementQty = () =>{
    if(quantity>=stock) return
    setQuantity((prev)=>prev+1)
  }

  const decrementQty = () =>{
    if(quantity<=1) return
    setQuantity((prev)=>prev-1)
  } 
  
  const addToCartHandler = () =>{
    if(stock === 0) return Toast.show({
        type:"error",
        text1:"Out Of Stock",
    })
    Toast.show({
        type:"success",
        text1:"Added to Cart",
    })

    
  }

  useEffect(()=>{
    dispatch(getProductDetails(route.params.id))
  },[dispatch,route.params.id,isFocused])

  return (
    <View style={styles.productDetailsStyle}>
      <Header back={true} emptyCart={false}/>
      <Carousel
      vertical={false}
      layout="stack"
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      ref = {carouselRef}
      data={images}
      renderItem={CarouselCardItem}
      />
      <View style={{
        backgroundColor:colors.color2,
        padding:35,
        flex:1,
        marginTop:-300,
        borderTopLeftRadius:55,
        borderTopRightRadius:55
      }}>
      <Text numberOfLines={2} style={{
        fontSize:25
      }}>{name}</Text>
      <Text style={{
        fontSize:18,
        fontWeight:"900"
      }}>₹{price}</Text>
      <Text numberOfLines={8} style={{
        letterSpacing:1,
        lineHeight:20,
        marginVertical:15
      }}>{description}</Text>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:5
      }}>
        <Text style={{color:colors.color3,fontWeight:"100"}}>Quantity</Text>
        <View
        style={{
            width:80,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
        }}
        >
            <TouchableOpacity onPress={()=>decrementQty()}>
                <Avatar.Icon icon={"minus"}
                size={20}
                style={{
                    borderRadius:5,
                    backgroundColor:colors.color5,
                    height:25,
                    width:25
                }}
                />
            </TouchableOpacity>
            <Text style={{
                backgroundColor:colors.color4,
                height:25,
                width:25,
                textAlignVertical:"center",
                textAlign:"center",
                borderWidth:1,
                borderRadius:5,
                borderColor:colors.color5
            }}>
                {quantity}
            </Text>
            <TouchableOpacity onPress={()=>incrementQty()}>
                <Avatar.Icon icon={"plus"}
                size={20}
                style={{
                    borderRadius:5,
                    backgroundColor:colors.color5,
                    height:25,
                    width:25
                }}
                />
            </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={()=>addToCartHandler()}>
        <Button icon={"cart"} textColor={colors.color2} style={{
            backgroundColor:colors.color3,
            borderRadius:100,
            padding:5,
            marginVertical:35
        }}>Add To Cart</Button>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const CarouselCardItem = ({item,index}:{item:any,index:any}) => {
    return (
        <View style={style.container} key={index}>
            <Image source={{uri:item.url}} style={style.image}/>
        </View>
    );
}

const style = StyleSheet.create({
    image:{
        width:ITEM_WIDTH,
        resizeMode:"contain",
        height:250
    },
    container:{
     marginTop:100
    }
})

export default ProductDetails