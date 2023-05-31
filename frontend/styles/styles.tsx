import { StyleSheet, Platform, StatusBar } from "react-native";
export const colors = {
color1: "#c70049",
colorlight: "rgba(227,25,99,1)",
colorlight2: "rgba(199,0,73,0.8)",
color2: "white",
color3: "rgb(45,45,45)",
color4: "transparent",
color5: "#f2f2f2",
color6: "#f7f7f7",
};

export const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: colors.color3,
        color: colors.color2,
        padding: 5,
        borderRadius: 5
    },
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
    },
    inputStyling:{
        height:50,
        backgroundColor:colors.color2,
        marginVertical:10,
        marginHorizontal:20
    },
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: colors.color3,
        borderRadius: 10,
        justifyContent: "center",
        elevation: 10
    },
    forgetText: {
        color: colors.color2,
        marginVertical: 10,
        marginHorizontal: 20,
        alignSelf: "flex-end",
        fontWeight: 100
    },
    formBtn: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6,

    },
    orTextStyle:{
        alignSelf:"center",
        fontSize:20,
        fontWeight:100,
        color:colors.color2
    },
    link:{
        color:colors.color2,
        alignSelf:"center",
        fontSize:18,
        textTransform:'uppercase',
        marginVertical:10,
        marginHorizontal:20
    }
});

export const inputOptions={
    style:styles.inputStyling,
    mode:"outlined",
    activeOutlineColor:colors.color1
}