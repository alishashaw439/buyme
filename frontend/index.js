/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store } from './redux/store';
import { Provider } from "react-redux";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications

const Root = () => (

    <Provider store={store}>
      <App />
    </Provider>
  )
AppRegistry.registerComponent(appName, () => Root);
