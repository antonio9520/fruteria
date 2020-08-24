import React from 'react';
import {View, TouchableHighlight, Image, TextInput, Text} from 'react-native';
import styles from './Style';
import iconatras from '../../../../resources/imghompro/icono-atras.png';
import iconub from '../../../../resources/imghompro/Icon-Direccion.png';
import iconnot from '../../../../resources/imghompro/Icon-Notif-azul.png';
import visa from '../../../../resources/imgcarrito/Icono-Credito-Banco-1.png';
import mastercard from '../../../../resources/imgcarrito/Icono-Credito-Banco-2.png';
import aex from '../../../../resources/imgcarrito/Icono-Credito-Banco-3.png';
import tarjetazul from '../../../../resources/imgcarrito/Graphic-Tarjeta-2.png';

export default function Credito1(props) {
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
      <Text style={styles.txt}>T. Credito</Text>
      <View style={styles.vwtotal}>
        <Text style={styles.txtotal}>Total</Text>
        <Text style={styles.txtpreciototal}>$ 4.000</Text>
      </View>
      <View style={styles.vtcredito}>
        <Text style={styles.txtentrega}>Añade metodo de pago</Text>
        <View style={styles.vimagenes}>
          <View style={styles.vimgtipo2}>
            <Image source={visa} style={styles.imgtipo} />
          </View>
          <View style={styles.vimgtipo2}>
            <Image source={mastercard} style={styles.imgtipo} />
          </View>
          <View style={styles.vimgtipo2}>
            <Image source={aex} style={styles.imgtipo} />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.imgtarjeta}>
          <Image source={tarjetazul} style={styles.imgtarjeta} />
        </View>
      </View>
      <View style={styles.vwdatostarjeta}>
        <View>
          <TextInput
            style={styles.datostarjeta}
            placeholder="Numero de tarjeta"
          />
          <TextInput
            style={styles.datostarjeta}
            placeholder="Nombre y Apellido"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            underlayColor="#FFFFFF"
            onPress={() => navigation.goBack()}>
            <View style={styles.btatras}>
              {/* <Image source={iconatras} style={styles.ticonmenup2} /> */}
              <Text style={styles.txtatras}> &lt; Atras</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#FFFFFF"
            onPress={() => navigation.navigate('Credito2')}>
            <View style={styles.btsgt}>
              <Text style={styles.txtatras}> siguiente &gt; </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
