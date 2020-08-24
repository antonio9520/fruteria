import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Ajustes} from '../../../views/home/views/';

const Stack = createStackNavigator();

const OverHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AjustesHome" component={Ajustes} />
    </Stack.Navigator>
  );
};

export default OverHome;
