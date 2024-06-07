import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>Main</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
