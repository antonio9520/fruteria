import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './stacks/MainStack';
import CustomDrawer from './drawers/customDrawer/CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType={'slide'}
        drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Stacks" component={Stacks} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
