import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

export const Header = ({ back,emptyCart }: { back: any,emptyCart:boolean }) => {
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()
    const emptyCartHandler = ()=>{
        dispatch({
            type:"clearCart"
        })
    }
    return (
        <>
            {back && (
                <TouchableOpacity
                    style={{ position: "absolute", left: 20, top: 40, zIndex: 10 }}
                    onPress={() => navigation.goBack()}
                >
                    <Avatar.Icon
                        style={{ backgroundColor: colors.color4}}
                        icon="arrow-left" color={route.name === "productdetails" ? colors.color2 : colors.color3} 
                        
                        />
                </TouchableOpacity>
            )}
            <TouchableOpacity
                style={{ position: "absolute", right: 20, top: 40, zIndex: 10 }}
                onPress={emptyCart ? emptyCartHandler : () =>  navigation.navigate("cart")}
            >
                <Avatar.Icon
                    style={{ backgroundColor: colors.color4 }}
                    icon={emptyCart ? "delete-outline" : "cart-outline"} color={route.name === "productdetails" ? colors.color2 : colors.color3} />
            </TouchableOpacity>
        </>
    );
}