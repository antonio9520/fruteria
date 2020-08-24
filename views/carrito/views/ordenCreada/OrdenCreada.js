import React from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import styles from './Style';
import iconatras from '../../../../resources/imghompro/icono-atras.png';
import iconnot from '../../../../resources/imghompro/Icon-Notif-azul.png';
import icondi from '../../../../resources/imgpedidos/Icon-Dirección-Pin.png';
import puertaoff from '../../../../resources/imgcarrito/Icono-TipoDelivery-1-Off.png';
import iconpr2 from '../../../../resources/imghompro/Icono-TipoProdcuto-2.png';
import iconpr3 from '../../../../resources/imghompro/Icono-TipoProdcuto-3.png';
import effectivoff from '../../../../resources/imgcarrito/Icono-FormadePago-Efectivo-Off.png';
import comprarealizada from '../../../../resources/imgcarrito/Icono-Compra-Realizada.png';

export default function OrdenCreada(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.botonatras}>
        <Image source={iconatras} style={styles.ticonmenup} />
      </TouchableHighlight>

      <TouchableHighlight style={styles.mgbtmp3}>
        <Image source={iconnot} style={styles.ticonnot} />
      </TouchableHighlight>
      <View>
        <Image source={comprarealizada} style={styles.iconocarrito} />
      </View>
      <Text style={styles.textocreado}>Tu Pedido a sido creado</Text>
      <View style={styles.fechacreada}>
        <Text style={styles.txtfechcre}>Lun 22</Text>
        <Text style={styles.horacreada}>08:00 am - 08:30 am</Text>
        <Text style={styles.txtcambiarcreado}>Cambiar</Text>
      </View>
      <View style={styles.fechacreada}>
        <Text>Tipo de entrega (sin contacto)</Text>
        <Image source={puertaoff} style={styles.iconprod2} />
      </View>
      <View style={styles.fechacreada}>
        <Text style={styles.txtestimada}>Tus productos</Text>
        <Text style={styles.txtproductos}>4 Productos</Text>
        <View style={styles.vimgtprod}>
          <Image source={iconpr2} style={styles.iconprod} />
          <Image source={iconpr3} style={styles.iconprod} />
        </View>
      </View>
      <View style={styles.fechacreada2}>
        <Image source={icondi} style={styles.icono} />
        <Text style={styles.txttitulodir}>Direccion</Text>
        <Text style={styles.txtdireccion}>
          San Nicolás, San Miguel, Region Metropolitana, Chile
        </Text>
        <View>
          <Text style={styles.txttitulodir}>Metodo de pago</Text>
          <Image source={effectivoff} style={styles.iconprod2} />
          <Text style={styles.txtmetodocreado}>Efectivo</Text>
        </View>
        <View>
          <Text style={styles.txttotalcreado}>Total:</Text>
          <Text style={styles.txtpreciocreado}>$12.456</Text>
        </View>
      </View>
    </View>
  );
}
