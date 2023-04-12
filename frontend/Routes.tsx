import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Home } from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";


const Stack = createNativeStackNavigator()
export const Routes = () => {
    return (
       <NavigationContainer>
            <Stack.Navigator
             initialRouteName="home"
            screenOptions={{
                headerShown:false
            }}
            >
                <Stack.Group>
                    <Stack.Screen name="home" component={Home}/>
                    <Stack.Screen name="productdetails" component={ProductDetails}/>
                </Stack.Group>
            </Stack.Navigator>
            <Toast position="bottom" bottomOffset={20}/>
       </NavigationContainer>
    );
}