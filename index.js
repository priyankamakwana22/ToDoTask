/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//redux
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducer from './src/redux/Reducer';
// redux-persist
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import AsyncStorage from '@react-native-async-storage/async-storage'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler : hardSet
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

const reduxApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => reduxApp);
