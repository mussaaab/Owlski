import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './AppNavigation';



const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />

      <StatusBar backgroundColor="#6bdbd6" />
    </NavigationContainer>
  );
};



export default App;
