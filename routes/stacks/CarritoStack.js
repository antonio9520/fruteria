import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Carrito} from '../../views';

const Stack = createStackNavigator();

const CarritoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Carrito" component={Carrito} />
    </Stack.Navigator>
  );
};

export default CarritoStack;
