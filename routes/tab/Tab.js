import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CarritoStack, PerfilStack, PromoStack, PedidosStack} from '../stacks';
import {DrawerHome} from '../drawers/MainDrawer';
import IconHome from '../../resources/tabsicon/Menu-Home.png';
import IconPromo from '../../resources/tabsicon/Menu-Promos.png';
import IconCarrito from '../../resources/tabsicon/Menu-Carrito.png';
import IconPedidos from '../../resources/tabsicon/Menu-Pedidos.png';
import IconPerfil from '../../resources/tabsicon/Menu-Usuarios.png';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DrawerHome}
        options={{
          title: 'Inicio',
          tabBarIcon: () => (
            <Image
              source={IconHome}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Promo"
        component={PromoStack}
        options={{
          title: 'Promociones',
          tabBarIcon: () => (
            <Image
              source={IconPromo}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={CarritoStack}
        options={{
          title: 'Carrito',
          tabBarIcon: () => (
            <Image
              source={IconCarrito}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={PedidosStack}
        options={{
          title: 'Pedidos',
          tabBarIcon: () => (
            <Image
              source={IconPedidos}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilStack}
        options={{
          title: 'Perfil',
          tabBarIcon: () => (
            <Image
              source={IconPerfil}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
