import { TouchableOpacity, View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../styles/styles";


export const ProductCard = ({ stock,
    name,
    price,
    image,
    id,
    addToCartHandler,
    i,
    navigate
}: {
    stock: number,
    name: string,
    price: number,
    image: string,
    id: string,
    addToCartHandler: any
    i: number,
    navigate: any
}) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={() => navigate.navigate("productdetails", { id })}>
            <View style={{
                elevation: 5, width: 220,
                alignItems: "center", justifyContent: "space-between",
                margin: 20,
                borderRadius: 20,
                height: 400,
                backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.4,
            }}>
                <Image
                    source={{ uri: image }}
                    style={{
                        width: "100%",
                        height: 200,
                        resizeMode: "contain",
                        position: "absolute",
                        left: 50,
                        top: 105
                    }}
                />
                <View
                 style={{flexDirection:"row",padding:20,justifyContent:"space-between",width:"100%"}}
                >
                    <Text
                    numberOfLines={2}
                    style={{
                        color:i % 2 === 0 ? colors.color2 : colors.color1,
                        fontSize:25,
                        fontWeight:"300"
                    }}
                    >{name}</Text>
                    <Text
                    numberOfLines={2}
                    style={{
                        color:i % 2 === 0 ? colors.color2 : colors.color1,
                        fontSize:20,
                        fontWeight:"700"
                    }}
                    >₹{price}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor:i % 2 === 0 ? colors.color2 : colors.color3,
                    borderRadius:0,
                    borderBottomRightRadius:20,
                    borderBottomLeftRadius:20,
                    width:"100%"
                  }}
                >
                    <Button onPress={()=>addToCartHandler(id,stock)} textColor={i % 2 === 0 ? colors.color1:colors.color2}>Add To Cart</Button>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
}