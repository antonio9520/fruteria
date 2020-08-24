import React from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import iconnoti from '../../../resources/imghompro/Icon-Notif-azul.png';
import styles from '../Style';
import iconcalendario from '../../../resources/imgpedidos/Icon-Calendario.png';
import proddefault from '../../../resources/imgpedidos/Icono-Producto-Prototipo-1.png';
import dirpin from '../../../resources/imgpedidos/Icon-Dirección-Pin.png';
import fotorepartidor from '../../../resources/imgpedidos/Foto-Repartidor.png';
import formaefectivo from '../../../resources/imgpedidos/Icono-FormadePago-Efectivo-On.png';
import tipodeli from '../../../resources/imgpedidos/Icono-TipoDelivery-1-On.png';
import estrellaon from '../../../resources/imgpedidos/Icon-Calificacion-Azul-On–1.png';

export default function InfoPedidos(props) {
  const {navigation} = props;

  return (
    <View style={styles.container1}>
      <TouchableHighlight style={styles.mgbtmp1}>
        <Image source={iconnoti} style={styles.ticonmenup} />
      </TouchableHighlight>
      <Text style={styles.textmispedidos}>Mis Pedidos</Text>
      <View style={styles.box2}>
        <View style={styles.box3}>
          <Image source={iconcalendario} style={styles.tamañoicono} />
          <Text style={styles.textofecha}>22/06/2020</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.textohora}>08:00 am - 03:30 am </Text>
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.box3}>
          <Text style={styles.textoproductos}>Tus Productos</Text>
          <Text style={styles.textoproductos1}> . 4 Productos</Text>
        </View>
        <View style={styles.box3}>
          <Image source={proddefault} style={styles.fotoprod} />
          <Image source={proddefault} style={styles.fotoprod} />
          <Image source={proddefault} style={styles.fotoprod} />
          <Image source={proddefault} style={styles.fotoprod} />
        </View>
        <View style={styles.box5}>
          <Text style={styles.textoentrega}>DIRECCION DE ENTREGA</Text>
          <View style={styles.box6}>
            <Image source={dirpin} style={styles.pindireccion} />
            <Text style={styles.textodireccion}>
              San Nicolas 1425, San Miguel, Region Metropolitana, Chile
            </Text>
          </View>

          <View style={styles.box7}>
            <Text style={styles.txtformpago}>Forma de pago</Text>
            <Text style={styles.txtformpago1}> . Productos: $</Text>
            <Text style={styles.txtformpago1}> . Delivery: $</Text>
            <Text style={styles.txtformpago1}> . Propina $</Text>
            <TouchableHighlight>
              <Image source={tipodeli} style={styles.tipodeli} />
            </TouchableHighlight>
            <TouchableHighlight>
              <Image source={formaefectivo} style={styles.formaefectivo} />
            </TouchableHighlight>
          </View>
          <View style={styles.box8}>
            <Text style={styles.txtotal}>TOTAL:</Text>
            <Text style={styles.txtprecio}>$12.456</Text>
          </View>
          <View style={styles.box9}>
            <Image source={fotorepartidor} style={styles.fotorepartidor} />
            <Text style={styles.nombrerepartidor}>Mauricio Jimenez</Text>
            <Text style={styles.repartidor}></Text>
            <Image source={estrellaon} style={styles.estrella} />
            <Image source={estrellaon} style={styles.estrella} />
            <Image source={estrellaon} style={styles.estrella} />
          </View>
          <View />
        </View>
      </View>
    </View>
  );
}
