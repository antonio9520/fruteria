import React from 'react';
import {View, TouchableHighlight, Image, TextInput, Text} from 'react-native';
import styles from './Style';
import iconatras from '../../../../resources/imghompro/icono-atras.png';
import iconub from '../../../../resources/imghompro/Icon-Direccion.png';
import iconnot from '../../../../resources/imghompro/Icon-Notif-azul.png';
import tarjetroja from '../../../../resources/imgcarrito/Graphic-Tarjeta-1.png';
import {ScrollView} from 'react-native-gesture-handler';
import bci from '../../../../resources/imgcarrito/Icono-Debito-Banco-BCI.png';
import bice from '../../../../resources/imgcarrito/Icono-Debito-Banco-Bice.png';
import chile from '../../../../resources/imgcarrito/Icono-Debito-Banco-Chile.png';
import consorcio from '../../../../resources/imgcarrito/Icono-Debito-Banco-Consorcio.png';
import Coopeuch from '../../../../resources/imgcarrito/Icono-Debito-Banco-Coopeuch.png';
import corpbanca from '../../../../resources/imgcarrito/Icono-Debito-Banco-Corpbanca.png';
import desarrollo from '../../../../resources/imgcarrito/Icono-Debito-Banco-Desarrollo.png';
import estado from '../../../../resources/imgcarrito/Icono-Debito-Banco-Estado.png';
import falabella from '../../../../resources/imgcarrito/Icono-Debito-Banco-Falabella.png';
import hsbc from '../../../../resources/imgcarrito/Icono-Debito-Banco-HSBC.png';
import internacional from '../../../../resources/imgcarrito/Icono-Debito-Banco-Internacional.png';
import itau from '../../../../resources/imgcarrito/Icono-Debito-Banco-Itau.png';
import horoes from '../../../../resources/imgcarrito/Icono-Debito-Banco-LosHoroes.png';
import rabobank from '../../../../resources/imgcarrito/Icono-Debito-Banco-Rabobank.png';
import ripley from '../../../../resources/imgcarrito/Icono-Debito-Banco-Ripley.png';
import santender from '../../../../resources/imgcarrito/Icono-Debito-Banco-Santander.png';
import scotiabank from '../../../../resources/imgcarrito/Icono-Debito-Banco-Scotiabank.png';
import scotiabankazul from '../../../../resources/imgcarrito/Icono-Debito-Banco-ScotiabankAzul.png';
import security from '../../../../resources/imgcarrito/Icono-Debito-Banco-Security.png';

export default function Debito1(props) {
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
      <Text style={styles.txt}>T. Debito</Text>
      <View style={styles.vwtotal}>
        <Text style={styles.txtotal}>Total</Text>
        <Text style={styles.txtpreciototal}>$ 4.000</Text>
      </View>
      <View style={styles.vtcredito}>
        <Text style={styles.txtentrega}>Añade metodo de pago</Text>
        <ScrollView horizontal={true}>
          <View style={styles.vimagenes}>
            <View style={styles.vimgtipo2}>
              <Image source={bci} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={bice} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={chile} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={consorcio} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={Coopeuch} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={corpbanca} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={desarrollo} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={estado} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={falabella} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={hsbc} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={internacional} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={itau} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={horoes} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={rabobank} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={ripley} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={santender} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={scotiabank} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={scotiabankazul} style={styles.imgtipo} />
            </View>
            <View style={styles.vimgtipo2}>
              <Image source={security} style={styles.imgtipo} />
            </View>
          </View>
        </ScrollView>
      </View>
      <View>
        <View style={styles.imgtarjeta}>
          <Image source={tarjetroja} style={styles.imgtarjeta} />
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
            onPress={() => navigation.navigate('Debito2')}>
            <View style={styles.btsgt}>
              <Text style={styles.txtatras}> siguiente &gt; </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
