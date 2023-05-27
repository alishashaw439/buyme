import { StyleSheet, Text, View } from "react-native"
import { colors } from "../styles/styles"
export const ProductListHeading = () => {
    return (
        <View
            style={headingStyle.container}
        >
            <Text style={headingStyle.textStyle}>Image</Text>
            <Text style={headingStyle.textStyle}>Price</Text>
            <Text style={{...headingStyle.textStyle, width: null, maxWidth:120}}>Name</Text>
            <Text style={{...headingStyle.textStyle, width: 70}}>Category</Text>
            <Text style={headingStyle.textStyle}>Stock</Text>
        </View>
    )
}

const headingStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.color3,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 45,
        alignItems: "center",
        borderRadius: 5,
        padding:10
    },
    textStyle: {
        width: 45,
        color: colors.color2,
        fontWeight: 900,
    }
})