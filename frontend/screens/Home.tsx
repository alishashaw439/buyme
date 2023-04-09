import { SafeAreaView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { styles } from "../styles/styles";

export const Home = () =>{
    return(
        <View style={styles.defaultStyle}>
            <Header back={false} emptyCart={false}></Header>
            <Text style={{fontSize:25}}>Our</Text>
            <Text style={{fontSize:25,fontWeight:"900"}}>Products</Text>
        </View>
    );
}