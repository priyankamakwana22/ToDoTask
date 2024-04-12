/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducer from './src/redux/Reducer';

const store =  createStore(reducer);

const reduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => reduxApp);
