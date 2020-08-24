import React from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import styles from './Style';
import iconatras from '../../../../resources/imghompro/icono-atras.png';
import iconub from '../../../../resources/imghompro/Icon-Direccion.png';
import iconnot from '../../../../resources/imghompro/Icon-Notif-azul.png';
import icondi from '../../../../resources/imgpedidos/Icon-Dirección-Pin.png';
import puertaoff from '../../../../resources/imgcarrito/Icono-TipoDelivery-1-Off.png';
import iconpr2 from '../../../../resources/imghompro/Icono-TipoProdcuto-2.png';
import iconpr3 from '../../../../resources/imghompro/Icono-TipoProdcuto-3.png';
import vermas from '../../../../resources/imgcarrito/Icon-VerMas.png';
import effectivoff from '../../../../resources/imgcarrito/Icono-FormadePago-Efectivo-Off.png';
import calendario from '../../../../resources/imgcarrito/Icon-Calendario.png';
import hora from '../../../../resources/imgcarrito/Icon-Hora.png';
import cupon from '../../../../resources/imgcarrito/Icon-Cupon.png';
import editar from '../../../../resources/imgcarrito/Icon-Editar-Pedido.png';

export default function confirmar(props) {
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
      <Text style={styles.txt}>Confirmar Pedido</Text>
      <View style={styles.vtusproductos}>
        <Text style={styles.txtestimada}>Tus productos</Text>
        <Text style={styles.txtproductos}>4 Productos</Text>
        <View style={styles.vimgtprod}>
          <Image source={iconpr2} style={styles.iconprod} />
          <Image source={iconpr3} style={styles.iconprod} />
          <Image source={vermas} style={styles.iconovermas} />
        </View>
      </View>
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

      <View style={styles.vdep1}>
        <Text style={styles.txtdepto2}>Depto 903</Text>
      </View>
      <View style={styles.vdep1}>
        <Image source={calendario} style={styles.icono1} />
        <Text style={styles.txtdepto1}> 22/06/2020</Text>
        <Image source={hora} style={styles.icono1} />
        <Text style={styles.txtdepto1}> 08:00 - 08:30 am</Text>
        <Image source={editar} style={styles.icono1} />
      </View>

      <View style={styles.vtipoentrega1}>
        <Text style={styles.txtestimada}>Entrega estimada</Text>
        <Text style={styles.txtminutos1}> 36 - 46 min</Text>
      </View>

      <View style={styles.viewpago}>
        <Text style={styles.txtforma}>Forma de pago</Text>
        <View style={styles.vimgtprod}>
          <Image source={puertaoff} style={styles.iconprod1} />
          <Image source={effectivoff} style={styles.iconprod1} />
        </View>
        <View style={styles.vforpago}>
          <Text style={styles.txttituloproductos}> . Productos:</Text>
          <Text style={styles.txtprecioconfirmar}> $ 4.000</Text>
        </View>
        <View style={styles.vforpago}>
          <Text style={styles.txttituloproductos}> . Delivery:</Text>
          <Text style={styles.txtprecioconfirmar}> $ 2.000</Text>
        </View>
        <View style={styles.vforpago}>
          <Text style={styles.txttituloproductos}> . Propina:</Text>
          <Text style={styles.txtprecioconfirmar}> $ 1.000</Text>
        </View>
      </View>
      <View style={styles.vdep2}>
        <Image source={cupon} style={styles.icono1} />
        <Text style={styles.txttituloproductos}> Ingresa cupon</Text>

        <Image source={vermas} style={styles.iconovermas1} />
      </View>
      <TouchableHighlight
        underlayColor="#FFFFFF"
        onPress={() => navigation.navigate('CrearOrden')}>
        <View style={styles.confirmar}>
          <View style={styles.boxcantidad}>
            <Text style={styles.txtcantidad}>4</Text>
          </View>
          <Text style={styles.txtirpagar}>Confirmar</Text>
          <Text style={styles.txtpagar}>$4.000</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
