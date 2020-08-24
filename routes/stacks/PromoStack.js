import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Promo} from '../../views';

const Stack = createStackNavigator();

const PromoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Promo" component={Promo} />
    </Stack.Navigator>
  );
};

export default PromoStack;
