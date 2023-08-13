import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { ProductCard } from "../components/ProductCard";
import SearchModal from "../components/SearchModal";
import { colors, styles } from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";
import { useSetCategories } from "../utils/hooks";
import Toast from "react-native-toast-message";

export const Home = () => {

   const [category,setCategory] = useState("");
   const navigation = useNavigation()
   const [activeSearch, setActiveSearch] = useState(false);
   const [searchQuery,setSearchQuery] = useState("")
   const [categories,setCategories] = useState([])
   const dispatch = useDispatch()
   const isFocused = useIsFocused()
   const { products } = useSelector((state)=>state.product)
   const categoryHandler = (id:any)=>{
       setCategory(id)
   }
   const addToCartHandler =(id,name,price,image,stock)=>{
    if(stock===0){
        return Toast.show({
            type:"error",
            text1:"Out Of Stock"
        })
    }
    dispatch({
        type:"addToCart",
        payload:{
            product:id,
            name,price,image,stock,quantity: 1
        }
    })
    Toast.show({
        type:"success",
        text1:"Added to Cart"
    })
   }

   useSetCategories(setCategories,isFocused)
   useEffect(()=>{
    const timeOutId = setTimeout(()=>{
        dispatch(getAllProducts(searchQuery,category))
    },500)
    return ()=>{
        clearTimeout(timeOutId)
    }
   },[dispatch,searchQuery,category,isFocused])

    return (
        <>
        { activeSearch && <SearchModal searchQuery={searchQuery} setSearchQuery={setSearchQuery}
setActiveSearch={setActiveSearch} products = {products} />}
        <View style={styles.defaultStyle}>
            {/* Header */}
            <Header back={false} emptyCart={false}></Header>
            {/* Header row */}
            <View style={{
                paddingTop: 70,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center"
            }}>
               <Heading text1="Our" text2="Products"/>
                {/* Search */}
                <View style={{shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.3}}>
                    <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)} >
                        <Avatar.Icon
                            icon="magnify"
                            color="grey"
                            style={{ backgroundColor: colors.color2, elevation:12}}
                        ></Avatar.Icon>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Categories */}
            <View style={{height:80,flexDirection:"row"}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}
               contentContainerStyle={{alignItems:"center"}}
              >
              {
                categories.map((item,index)=>{
                    return (
                        <Button
                        key={item._id}
                        style={{
                            backgroundColor: category===item._id ? colors.color1 : colors.color5,
                            borderRadius:100,
                            margin:5
                        }}
                        onPress={()=>categoryHandler(item._id)}
                        >
                            <Text
                            style={{fontSize:12,color:category===item._id ? colors.color2:"grey"}}
                            >{item.category}</Text>
                        </Button>
                    );
                })
               }
              </ScrollView>
            </View>
            {/* products */}
            <View style={{flex:1}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                    products.map((item,index)=>{
                        console.log("weee",index)
                        return(
                            <ProductCard
                              stock={item.stock}
                              name={item.name}
                              price={item.price}
                              image={item.images[0].url}
                              addToCartHandler={addToCartHandler}
                              id={item._id}
                              key={item._id}
                              i={index}
                              navigate={navigation}
                        />
                        );
                    })
                    }
                    
                </ScrollView>
            </View>
        </View>
        {/* Footer */}
        <Footer activeRoute={"home"}/>

        </>
    );
}