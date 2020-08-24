import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Resumen,
  Agendar,
  Confirmar,
  CrearOrden,
  OrdenCreada,
  Credito1,
  Credito2,
  Debito1,
  Debito2,
  CreditoCargada,
  DebitoCargada,
} from '../../../views/carrito/views';
const Stack = createStackNavigator();

const OverCarrito = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Agendar" component={Agendar} />
      <Stack.Screen name="Resumen" component={Resumen} />
      <Stack.Screen name="Confirmar" component={Confirmar} />
      <Stack.Screen name="CrearOrden" component={CrearOrden} />
      <Stack.Screen name="OrdenCreada" component={OrdenCreada} />
      <Stack.Screen name="Credito1" component={Credito1} />
      <Stack.Screen name="Credito2" component={Credito2} />
      <Stack.Screen name="Debito1" component={Debito1} />
      <Stack.Screen name="Debito2" component={Debito2} />
      <Stack.Screen name="CreditoCargada" component={CreditoCargada} />
      <Stack.Screen name="DebitoCargada" component={DebitoCargada} />
    </Stack.Navigator>
  );
};

export default OverCarrito;
