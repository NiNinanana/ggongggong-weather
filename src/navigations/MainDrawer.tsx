import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {mainNavigations} from '../constants/navigations';
import HomeScreen from '../screens/Home';

export type MainDrawerParamList = {
  [mainNavigations.HOME]: undefined;
};

interface MainDrawerProps {}

const Drawer = createDrawerNavigator();

const MainDrawer = ({}: MainDrawerProps) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={mainNavigations.HOME} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
