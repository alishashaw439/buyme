import { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { Header } from "../components/Header";
import { colors, styles } from "../styles/styles";

export const Home = () => {
    const categories = [{category:"clothes",_id:"234"},
    {category:"shoes",_id:"633"},
    {category:"accessories",_id:"543"},
    {category:"furniture",_id:"342"}
]
   const [category,setCategory] = useState("");
   const categoryHandler = (id:any)=>{
       setCategory(id)
   }
   console.log(category)
    return (
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
                    <TouchableOpacity >
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
    );
}