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
import mastercard from '../../../../resources/imgcarrito/Icono-Pago-Establecido-Credito-1.png';

export default function CreditoCargada(props) {
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
        <View style={styles.ventregaest}>
          <Image source={mastercard} style={styles.iconprod} />
          <Text style={styles.ntarjeta}> Mastercard*0325</Text>
          <Text style={styles.txtcambiar1}>Cambiar</Text>
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
