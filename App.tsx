import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigations/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
     <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
    </Provider>
     
  );
}
