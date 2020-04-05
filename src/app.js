import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import './config/ReactotronConfig.js';
import { StatusBar } from 'react-native';

import { setNavigator } from './util/NavigationService';
import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <NavigationContainer ref={setNavigator}>
      <Provider store={store}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
