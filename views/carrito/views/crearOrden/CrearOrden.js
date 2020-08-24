import React from 'react';
import {View, Image, Text, Button} from 'react-native';
import styles from './Style';
import icondi from '../../../../resources/imgpedidos/Icon-Dirección-Pin.png';
import cargando from '../../../../resources/imgcarrito/Charging.png';

export default function CrearOrden(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <Image source={cargando} style={styles.cargando1} />
        <Text style={styles.txtcargando}>Creando tu orden</Text>
        <Image source={icondi} style={styles.icono} />
      </View>
      <View style={styles.vvdireccion1}>
        <Text>ENTREGAR A</Text>
        <Text>San nicolas 1425, san miguel, Region Metropolitana, Chile</Text>
      </View>
      <Button
        title="Press me"
        onPress={() => navigation.navigate('OrdenCreada')}
      />
    </View>
  );
}
