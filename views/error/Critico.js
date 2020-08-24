import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Style';
import error from '../../resources/imgerror/Error-Graphics-2.png';

export default function Ecritico(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Image source={error} style={styles.imagen} />
      <Text style={styles.ups}>UPS!</Text>
      <Text style={styles.texto}>¡Vaya! Algo salio mal.</Text>
      <Text style={styles.texto}>pero pronto volvera a estar bien</Text>
      <Text style={styles.reintentar}>Ir al Home</Text>
    </View>
  );
}
