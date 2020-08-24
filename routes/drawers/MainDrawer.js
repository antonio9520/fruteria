import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../stacks/HomeStack';

const Drawer = createDrawerNavigator();

export const DrawerHome = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};
