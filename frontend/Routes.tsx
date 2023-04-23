import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Cart from "./screens/Cart";
import ConfirmOrder from "./screens/ConfirmOrder";
import { ForgotPassword } from "./screens/ForgotPassword";
import { Home } from "./screens/Home";
import Login from "./screens/Login";
import Payment from "./screens/Payment";
import ProductDetails from "./screens/ProductDetails";
import { Profile } from "./screens/Profile";
import { SignUp } from "./screens/SignUp";
import { Verify } from "./screens/Verify";



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
                    <Stack.Screen name="forgotpassword" component={ForgotPassword}/>
                    <Stack.Screen name="verify" component={Verify}/>
                    <Stack.Screen name="signup" component={SignUp}/>
                    <Stack.Screen name="profile" component={Profile}/>
                </Stack.Group>
            </Stack.Navigator>
            <Toast position="bottom" bottomOffset={20}/>
       </NavigationContainer>
    );
}