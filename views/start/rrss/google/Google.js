import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import backappme from '../../../../resources/AppMe-bg-white.png';
import imgfb from '../../../../resources/imgrss/Social-Network-Icon-Google.png';
import imgGoo from '../../../../resources/imgrss/Social-Network-Conection.png';
import styles from '../Style';

export default function Google(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={backappme} style={styles.image}>
        <Text style={styles.titulo}>Accede con tus cuentas</Text>
        <Text style={styles.titulo1}>de redes sociales</Text>

        <View style={styles.row}>
          <View style={styles.box}>
            <Image source={imgGoo} style={styles.mgb} />
          </View>
          <View style={styles.box}>
            <Image source={imgfb} style={styles.mgb} />
          </View>
          <View style={styles.box} />
        </View>
        <Text style={styles.titulo2}>AppMe esta pidiendo</Text>
        <Text style={styles.titulo2}>Acceso a tu cuenta de </Text>
        <Text style={styles.titulo3}>Facebook</Text>

        <View style={styles.center2}>
          <TouchableHighlight
            style={styles.btnSeguir}
            underlayColor="#F3F306"
            onPress={() => this.goToScreen('Register1')}>
            <Text style={styles.textbutton}>Continuar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}
