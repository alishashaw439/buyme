import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import {PieChart} from "react-native-chart-kit"
import { colors } from '../styles/styles';

// const screenwidth = Dimensions.get("screen").width;
const Chart = ({inStock=0,outOfStock=0}) => {
 const data=[
  {
    name:"Out of stock",
    population:outOfStock,
    color:colors.colorlight,
    legendFontColor:colors.color2
  },
  {
    name:"In stock",
    population:inStock,
    color:colors.colorlight2,
    legendFontColor:colors.color2
  }
 ]

 const chartConfig = {
  color:(opacity=1) => `rgba(26,255,146,${opacity})` 
 }
  return (
    <View style={{paddingTop:30}}>
     <PieChart
     data={data}
     width={320}
     height={150}
     accessor={"population"}
     backgroundColor={colors.color3}
     paddingLeft={"15"}
     center={[5,5]}
     chartConfig={chartConfig}
     absolute
     ></PieChart>
      </View>
  )
}

export default Chart