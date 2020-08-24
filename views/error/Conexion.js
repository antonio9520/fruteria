import React from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import styles from './Style';
import error from '../../resources/imgerror/Error-Graphics-1.png';

export default function Econexion(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Image source={error} style={styles.imagen} />
      <Text style={styles.ups}>UPS!</Text>
      <Text style={styles.texto}>Al parecer algo no salio bien</Text>

      <TouchableHighlight style={styles.boton}>
        <Text style={styles.reintentar}>Reintentar</Text>
      </TouchableHighlight>
    </View>
  );
}
