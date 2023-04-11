import { StyleSheet, Platform, StatusBar } from "react-native";
export const colors = {
color1: "#c70049",
colorlight: "rgba(227,25,99)",
colorlight2: "rgba(199,0,73,0.8)",
color2: "white",
color3: "rgb(45,45,45)",
color4: "transparent",
color5: "#f2f2f2",
color6: "#f7f7f7",
};

export const styles = StyleSheet.create({
    defaultStyle:{
        padding: 35,
        paddingTop: StatusBar.currentHeight,
        flex:1,
        backgroundColor:colors.color2
    },
    productDetailsStyle:{
        paddingTop: StatusBar.currentHeight,
        flex:1,
        backgroundColor:colors.color1
    }
});