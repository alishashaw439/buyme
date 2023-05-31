import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import AdminOrders from "./screens/Admin/AdminOrders";
import { AdminPanel } from "./screens/Admin/AdminPanel";
import Categories from "./screens/Admin/Categories";
import UpdateProduct from "./screens/Admin/UpdateProduct";
import Cart from "./screens/Cart";
import { ChangePassword } from "./screens/ChangePassword";
import ConfirmOrder from "./screens/ConfirmOrder";
import { ForgotPassword } from "./screens/ForgotPassword";
import { Home } from "./screens/Home";
import Login from "./screens/Login";
import Orders from "./screens/Orders";
import Payment from "./screens/Payment";
import ProductDetails from "./screens/ProductDetails";
import { Profile } from "./screens/Profile";
import { SignUp } from "./screens/SignUp";
import { UpdateProfile } from "./screens/UpdateProfile";
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
                    <Stack.Screen name="updateProfile" component={UpdateProfile}/>
                    <Stack.Screen name="changePassword" component={ChangePassword}/>
                    <Stack.Screen name="orders" component={Orders}/>
                    <Stack.Screen name="adminpanel" component={AdminPanel}/>
                    <Stack.Screen name="categories" component={Categories}/>
                    <Stack.Screen name="adminorders" component={AdminOrders}/>
                    <Stack.Screen name="updateproduct" component={UpdateProduct}/>
                </Stack.Group>
            </Stack.Navigator>
            <Toast position="bottom" bottomOffset={20}/>
       </NavigationContainer>
    );
}