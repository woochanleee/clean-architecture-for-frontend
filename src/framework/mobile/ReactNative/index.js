/**
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import { name } from './app.json';

import HomeScreen from './view/screen/home';
import store from './data/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  );
};

AppRegistry.registerComponent(name, () => App); 
