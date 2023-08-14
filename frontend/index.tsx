/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store } from './redux/store';
import { Provider } from "react-redux";
import { LogBox } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications
const stripeKey = "pk_test_51NRfTjSC0qj1zb7IrKnCbivDe9UExExTnq22rMA5iMPM2g2zEjxY5q1Vn4VzO4ueDkuwJYBtXjHMRAKCzgXlsjk200RRmw3yW0"
const Root = () => (
 <StripeProvider
 merchantIdentifier="alisha@gmail.com"
 publishableKey={stripeKey}
 threeDSecureParams={{
  backgroundColor:"#fff",
  timeout:5
 }}
 >
 <Provider store={store}>
      <App />
    </Provider>
 </StripeProvider>
  )
AppRegistry.registerComponent(appName, () => Root);
