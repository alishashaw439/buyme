import { View, Text, Platform, StatusBar, ScrollView, TouchableOpacity, Image, BackHandler } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Headline, Searchbar } from "react-native-paper";
import { Header } from "./Header";

const SearchModal = ({ searchQuery, setActiveSearch, setSearchQuery, products }: { searchQuery: string, setActiveSearch: any, setSearchQuery: any, products: any }) => {
    const navigate = useNavigation();
    const backAction = () => {
        setSearchQuery("")
        setActiveSearch(false)
        return true
    }
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction)
        }
    })
    return (
        <>
            {
                Platform.OS === "ios" &&
                <TouchableOpacity
                    style={{ position: "absolute", left: 10, top: 20, zIndex: 10 }}
                    onPress={() => {
                        setSearchQuery("")
                        setActiveSearch(false)
                        navigate.navigate("home")
                    }}
                >
                    <Avatar.Icon
                        style={{ backgroundColor: colors.color4, top: 10 }}
                        icon="arrow-left" color={colors.color3}
                    />
                </TouchableOpacity>
            }
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors.color2,
                    paddingVertical: 35,
                    paddingHorizontal: 35,
                }}
            >
                <SafeAreaView>
                    <Searchbar
                        placeholder="Search..."
                        onChangeText={(query: any) => setSearchQuery(query)}
                        value={searchQuery}
                        style={{
                            marginTop: 20
                        }}
                    />
                    <ScrollView>
                        <View
                            style={{
                                paddingVertical: 40,
                                paddingHorizontal: 10
                            }}
                        >
                            {products.map((i: any) => {
                                return (
                                    <SearchItem
                                        key={i._id}
                                        imgSrc={i.images[0].url}
                                        name={i.name}
                                        price={i.price}
                                        handler={() => {
                                            //TODO 
                                            console.log("go to product details")
                                            // navigate.navigate("productdetails",{id:i._id})
                                        }}
                                    />
                                )
                            })}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    );
};

const SearchItem = ({ price, name, imgSrc, handler }: { price: number, name: string, imgSrc: string, handler: any }) => {
    return (
        <TouchableOpacity onPress={handler}>
            <View style={{
                padding: 20,
                borderRadius: 10,
                backgroundColor: colors.color2,
                elevation: 5,
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
                flexDirection: "row",
                marginVertical: 30,
            }}>

                <Image
                    source={{
                        uri: imgSrc,
                    }}
                    style={{
                        width: 80,
                        height: 80,
                        position: "absolute",
                        resizeMode: "contain",
                        top: -15,
                        left: 10,
                        borderTopLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                />
                <View style={{ width: "80%", paddingHorizontal: 30 }}>
                    <Text numberOfLines={1}>{name}</Text>
                    <Headline style={{ fontWeight: "900" }}>${price}</Headline>
                </View>
            </View>
        </TouchableOpacity>
    );

}

export default SearchModal;