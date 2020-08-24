import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Perfil} from '../../views';

const Stack = createStackNavigator();

const PerfilStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
};

export default PerfilStack;
