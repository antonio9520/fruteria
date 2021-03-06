import React from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import styles from './Style';
import iconatras from '../../../../resources/imghompro/icono-atras.png';
import iconub from '../../../../resources/imghompro/Icon-Direccion.png';
import iconnot from '../../../../resources/imghompro/Icon-Notif-azul.png';
import icondi from '../../../../resources/imgpedidos/Icon-Dirección-Pin.png';
import puertaoff from '../../../../resources/imgcarrito/Icono-TipoDelivery-1-Off.png';
import porteriaoff from '../../../../resources/imgcarrito/Icono-TipoDelivery-2-Off.png/';
import iconpr2 from '../../../../resources/imghompro/Icono-TipoProdcuto-2.png';
import iconpr3 from '../../../../resources/imghompro/Icono-TipoProdcuto-3.png';
import vermas from '../../../../resources/imgcarrito/Icon-VerMas.png';
import tdebitoff from '../../../../resources/imgcarrito/Icono-FormadePago-Debito-Off.png';
import tcreditoff from '../../../../resources/imgcarrito/Icono-FormadePago-Credito-Off.png';
import effectivoff from '../../../../resources/imgcarrito/Icono-FormadePago-Efectivo-Off.png';

export default function resumen(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.botonatras}>
        <Image source={iconatras} style={styles.ticonmenup} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.mgbtmp1}>
        <Image source={iconub} style={styles.ticonnot} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.mgbtmp3}>
        <Image source={iconnot} style={styles.ticonnot} />
      </TouchableHighlight>
      <Text style={styles.txt}>Checkout</Text>
      <View style={styles.vdireccion}>
        <Image source={icondi} style={styles.icono} />
        <Text style={styles.txttitulodir}>Direccion</Text>
        <View style={styles.vvdireccion}>
          <Text style={styles.txtdireccion}>
            San Nicolás, San Miguel, Region Metropolitana, Chile
          </Text>
        </View>
        <View>
          <Text style={styles.txtcambiar}>Cambiar</Text>
        </View>
      </View>

      <View style={styles.vdep}>
        <Text style={styles.txtdepto}>Depto 903</Text>
      </View>

      <View style={styles.vtipoentrega}>
        <Text style={styles.txtentrega}>Tipo de entrega (sin contacto)</Text>
        <View style={styles.vimagenes}>
          <View style={styles.vimgtipo}>
            <Image source={puertaoff} style={styles.imgtipo} />
            <Text style={styles.txttipo}>Dejar en puerta</Text>
            <Text style={styles.txttipo}>De mi depto/casa</Text>
          </View>
          <View style={styles.vimgtipo}>
            <Image source={porteriaoff} style={styles.imgtipo} />
            <Text style={styles.txttipo}>Dejar en </Text>
            <Text style={styles.txttipo}>porteria/recepcion</Text>
          </View>
        </View>
      </View>
      <View style={styles.vtusproductos}>
        <Text style={styles.txtestimada}>Tus productos</Text>
        <Text style={styles.txtproductos}>4 Productos</Text>
        <View style={styles.vimgtprod}>
          <Image source={iconpr2} style={styles.iconprod} />
          <Image source={iconpr3} style={styles.iconprod} />
          <Image source={vermas} style={styles.iconovermas} />
        </View>
        <View style={styles.ventregaest}>
          <Text style={styles.txtestimada}>Entrega estimada</Text>
          <Text style={styles.txtminutos}> 36 - 46 min</Text>
        </View>
      </View>
      <View style={styles.vformadepago}>
        <Text style={styles.txtproductos}>Forma de pago</Text>
        <View style={styles.vimagenes1}>
          <View style={styles.vimgtipo1}>
            <TouchableHighlight
              style={styles.imgtipo1}
              onPress={() => navigation.navigate('Debito1')}
              underlayColor="#4BB76C">
              <Image source={tdebitoff} style={styles.imgtipo1} />
            </TouchableHighlight>
            <Text style={styles.txttipo}>T. Debito</Text>
          </View>
          <View style={styles.vimgtipo1}>
            <TouchableHighlight
              style={styles.imgtipo1}
              onPress={() => navigation.navigate('Credito1')}
              underlayColor="#4BB76C">
              <Image source={tcreditoff} style={styles.imgtipo1} />
            </TouchableHighlight>
            <Text style={styles.txttipo}>T. Crédito</Text>
          </View>
          <View style={styles.vimgtipo1}>
            <Image source={effectivoff} style={styles.imgtipo1} />
            <Text style={styles.txttipo}>Efectivo</Text>
          </View>
        </View>
      </View>
      <TouchableHighlight
        underlayColor="#FFFFFF"
        onPress={() => navigation.navigate('Confirmar')}>
        <View style={styles.cajairapagar}>
          <View style={styles.boxcantidad}>
            <Text style={styles.txtcantidad}>4</Text>
          </View>
          <Text style={styles.txtirpagar}>Ir a Pagar</Text>
          <Text style={styles.txtpagar}>$4.000</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
