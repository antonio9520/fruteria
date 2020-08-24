import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import iconcar from '../../../../resources/imghompro/TotalBar-Carro.png';
import styles from './Style';

const ValorCarrito = (props) => {
  const {navigation, valorTotalPagar} = props;

  return (
    <View style={styles.rowbtncarrito}>
      <View style={styles.itemCarrito}>
        <Text style={styles.txttotalbtncarrito}>Total: ${valorTotalPagar}</Text>
        <TouchableHighlight
          style={styles.btncarrito}
          onPress={() => navigation.navigate('Carrito')}>
          <View style={styles.row2}>
            <Text style={styles.txtbtncarro}>Carro</Text>
            <Image source={iconcar} style={styles.ticonnot12} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ValorCarrito;
