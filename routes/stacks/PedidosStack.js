import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pedidos} from '../../views';
import {InfoPedidos} from '../../views/pedidos/views';

const Stack = createStackNavigator();

const PedidosStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Pedidos" component={Pedidos} />
      <Stack.Screen name="InfoPedidos" component={InfoPedidos} />
    </Stack.Navigator>
  );
};

export default PedidosStack;
