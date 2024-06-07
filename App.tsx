import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainDrawer from './src/navigations/MainDrawer';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}

export default App;
