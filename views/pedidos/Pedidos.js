import React from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import iconnoti from '../../resources/imghompro/Icon-Notif-azul.png';
import styles from './Style';
import imgpedidos from '../../resources/imgpedidos/Icono-MisPedidos-2.png';
import imgpedidos1 from '../../resources/imgpedidos/Icono-MisPedidos-1.png';
import vermas from '../../resources/imgpedidos/Icon-VerMas.png';

const Pedidos = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container1}>
      <TouchableHighlight style={styles.mgbtmp1}>
        <Image source={iconnoti} style={styles.ticonmenup} />
      </TouchableHighlight>
      <Text style={styles.textmispedidos}>Mis Pedidos</Text> 
      <View style={styles.box1}>
        <Image source={imgpedidos} style={styles.imgped} />
        <Text style={styles.texfechaped}>Entregado el 22/06/2020</Text>
        <Text style={styles.textcantprod}>6 Productos</Text>
        <TouchableHighlight
          style={styles.ticonmenup1}
          onPress={() => navigation.navigate('InfoPedidos')}>
          <Image source={vermas} style={styles.ticonmenup1} />
        </TouchableHighlight>
      </View>
      <View style={styles.box1}>
        <Image source={imgpedidos1} style={styles.imgped} />
        <Text style={styles.texfechaped}>Entregado el 22/06/2020</Text>
        <Text style={styles.textcantprod}>6 Productos</Text>
        <TouchableHighlight
          style={styles.ticonmenup1}
          underlayColor="#D5D5D5"
          onPress={() => navigation.navigate('InfoPedidos')}>
          <Image source={vermas} style={styles.ticonmenup1} />
        </TouchableHighlight>
      </View>
      <View style={styles.box1}>
        <Image source={imgpedidos} style={styles.imgped} />
        <Text style={styles.texfechaped}>Entregado el 22/06/2020</Text>
        <Text style={styles.textcantprod}>6 Productos</Text>
        <TouchableHighlight
          style={styles.ticonmenup1}
          underlayColor="#D5D5D5"
          onPress={() => navigation.navigate('InfoPedidos')}>
          <Image source={vermas} style={styles.ticonmenup1} />
        </TouchableHighlight>
      </View>
      <View style={styles.box1}>
        <Image source={imgpedidos1} style={styles.imgped} />
        <Text style={styles.texfechaped}>Entregado el 22/06/2020</Text>
        <Text style={styles.textcantprod}>6 Productos</Text>
        <TouchableHighlight
          style={styles.ticonmenup1}
          onPress={() => navigation.navigate('InfoPedidos')}>
          <Image source={vermas} style={styles.ticonmenup1} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Pedidos;
