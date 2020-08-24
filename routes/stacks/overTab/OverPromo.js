import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {VerMas} from '../../../views/promo/views';

const Stack = createStackNavigator();

const OverPromo = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="VerMas" component={VerMas} />
    </Stack.Navigator>
  );
};

export default OverPromo;
