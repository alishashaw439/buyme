import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { Header } from "../components/Header";
import SearchModal from "../components/SearchModal";
import { colors, styles } from "../styles/styles";

const categories = [{category:"clothes",_id:"234"},
{category:"shoes",_id:"633"},
{category:"accessories",_id:"543"},
{category:"furniture",_id:"342"}
]
const products  = [
    {
        price:20,
        name:"Sample",
        _id:"241",
        images:[
            {
                url:"https://www.pngmart.com/image/179728/png/179727"
            }
        ]

    }
];

export const Home = () => {

   const [category,setCategory] = useState("");
   const [activeSearch, setActiveSearch] = useState(false);
   const [searchQuery,setSearchQuery] = useState("")
   const categoryHandler = (id:any)=>{
       setCategory(id)
   }
   console.log(category)
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
                <View>
                    <Text style={{ fontSize: 25 }}>Our</Text>
                    <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
                </View>
                {/* Search */}
                <View>
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
        </View>
        </>
    );
}