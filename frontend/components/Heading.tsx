import { Text, View } from "react-native";

export const Heading = ({text1,text2}:{text1:string,text2:string}) => {
    return (
        <View>
            <Text style={{ fontSize: 25 }}>{text1}</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>{text2}</Text>
        </View>
    );
}