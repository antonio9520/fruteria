import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashHome} from '../../views';
import TabNav from '../tab/Tab';
import {OverCarrito, OverPromo, OverPerfil, OverHome} from './overTab';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={SplashHome} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="OverCarrito" component={OverCarrito} />
      <Stack.Screen name="OverPromo" component={OverPromo} />
      <Stack.Screen name="OverPerfil" component={OverPerfil} />
      <Stack.Screen name="OverHome" component={OverHome} />
    </Stack.Navigator>
  );
};

export default HomeStack;
