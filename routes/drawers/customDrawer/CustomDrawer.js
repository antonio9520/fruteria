import React from 'react';
import {Text, View, SafeAreaView, Image, ScrollView} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import fotoperfil from '../../../resources/imgpedidos/Foto-Repartidor.png';
import styles from './Style';
import promociones from '../../../resources/tabsicon/Menu-Promos.png';
import carro from '../../../resources/tabsicon/Menu-Carrito.png';
import pedidos from '../../../resources/tabsicon/Menu-Pedidos.png';
import perfil from '../../../resources/tabsicon/Menu-Usuarios.png';
import logouts from '../../../resources/tabsicon/Menu-CerrarSesion.png';
import ayuda from '../../../resources/tabsicon/Menu-CentroAyuda.png';
import mepago from '../../../resources/tabsicon/Menu-MediosdePago.png';
import terminos from '../../../resources/tabsicon/Menu-TerminosyCondiciones.png';
import ubicacion from '../../../resources/imghompro/Icon-Direccion.png';
import ajustes from '../../../resources/imghompro/Icon-Config.png';

import firebase from '../../../firebase/Firebase';

const CustomDrawer = (props) => {
  const {navigation} = props;
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
          <View style={styles.cabezera}>
            <Image source={fotoperfil} style={styles.fotoperfil} />
            <Text style={styles.nombre}>Maximiliano Zepeda</Text>
          </View>
          <View style={styles.botonera}>
            <Image source={promociones} style={styles.tamicon} />
            <TouchableHighlight
              onPress={() => navigation.navigate('Promo')}
              underlayColor="#F6F7F9">
              <Text style={styles.txtbotones}>Promociones</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botonera}>
            <Image source={carro} style={styles.tamicon} />
            <TouchableHighlight
              onPress={() => navigation.navigate('Carrito')}
              underlayColor="#F6F7F9">
              <Text style={styles.txtbotones}>Carro</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botonera}>
            <Image source={pedidos} style={styles.tamicon} />
            <TouchableHighlight
              onPress={() => navigation.navigate('Pedidos')}
              underlayColor="#F6F7F9">
              <Text style={styles.txtbotones}>Pedidos</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botonera}>
            <Image source={perfil} style={styles.tamicon} />
            <TouchableHighlight
              onPress={() => navigation.navigate('Perfil')}
              underlayColor="#F6F7F9">
              <Text style={styles.txtbotones}>Perfil</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botonera}>
            <Image source={ubicacion} style={styles.tamicon} />
            <TouchableHighlight>
              <Text style={styles.txtbotones}>Dirreciones</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botonera}>
            <Image source={mepago} style={styles.tamicon} />
            <TouchableHighlight>
              <Text style={styles.txtbotones}>Medios de pago</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botonera}>
            <Image source={ajustes} style={styles.tamicon} />
            <TouchableHighlight>
              <Text style={styles.txtbotones}>Ajustes</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botonera}>
            <Image source={terminos} style={styles.tamicon} />
            <TouchableHighlight>
              <Text style={styles.txtbotones}>Terminos y condiciones</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botonera}>
            <Image source={ayuda} style={styles.tamicon} />
            <TouchableHighlight>
              <Text style={styles.txtbotones}>Centro ayuda</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.botoneraLogout}>
            <Image source={logouts} style={styles.tamiconlog} />
            <TouchableHighlight onPress={logout} underlayColor="#F6F7F9">
              <Text style={styles.txtbotoneslog}>Cerrar sesion</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
