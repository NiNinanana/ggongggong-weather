import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainDrawer from './src/navigations/MainDrawer';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
