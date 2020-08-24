import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EditarPerfil} from '../../../views/perfil/views/';

const Stack = createStackNavigator();

const OverPerfil = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
    </Stack.Navigator>
  );
};

export default OverPerfil;
