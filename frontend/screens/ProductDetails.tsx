import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useRef } from 'react'
import { styles } from '../styles/styles'
import { Header } from '../components/Header'
import { Carousel } from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get("window").width
console.log(SLIDER_WIDTH)
const horizontalMargin = 20;
const ITEM_WIDTH = Dimensions.get("window").width
console.log(ITEM_WIDTH)
const images = [
    {
        id:"241",
        url:"https://www.pngmart.com/files/12/Bob-Minion-Transparent-PNG.png"
    },
    {
        id:"242",
        url:"https://www.pngmart.com/files/12/Stuart-Minion-PNG-Pic.png"
    }
]
const ProductDetails = ({route}:{route:any}) => {

  const carouselRef = useRef(null)
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