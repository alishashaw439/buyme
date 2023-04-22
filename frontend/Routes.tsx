import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Cart from "./screens/Cart";
import ConfirmOrder from "./screens/ConfirmOrder";
import { Home } from "./screens/Home";
import Login from "./screens/Login";
import Payment from "./screens/Payment";
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
                    <Stack.Screen name="cart" component={Cart}/>
                    <Stack.Screen name="confirmorder" component={ConfirmOrder}/>
                    <Stack.Screen name="payment" component={Payment}/>
                    <Stack.Screen name="login" component={Login}/>
                </Stack.Group>
            </Stack.Navigator>
            <Toast position="bottom" bottomOffset={20}/>
       </NavigationContainer>
    );
}