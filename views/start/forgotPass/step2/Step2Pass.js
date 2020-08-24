import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
  TextInput,
} from 'react-native';
import backappme from '../../../../resources/AppMe-bg-blue2.png';
import styles from './Style';
import icon from '../../../../resources/imgiconform/Icon-Reenvio.png';

export default function Validacion(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={backappme} style={styles.image}>
        <View>
          <Text style={styles.titulo}>Hemos enviado</Text>
          <Text style={styles.titulo1}>un código de</Text>
          <Text style={styles.titulo1}>verificación a tu</Text>
          <Text style={styles.titulo1}>móvil...</Text>
          <Text style={styles.textow1}> Ingresa el codigo para finalizar</Text>
          <Text style={styles.textow2}> el registro</Text>
        </View>
        <View style={styles.passwordContainer1}>
          <TextInput
            style={styles.borde}
            placeholder="   •  •  •  •  •  •   "
          />
        </View>
        <View>
          <View style={styles.row1}>
            <Image source={icon} style={styles.tamicon} />
            <TouchableHighlight>
              <Text style={styles.textoree}> Reenviar codigo </Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => navigation.navigate('MetodoVal')}>
            <Text style={styles.textoree}> Otros Metodos </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.center2}>
          <TouchableHighlight
            style={styles.btnSeguir}
            underlayColor="#F3F306"
            onPress={() => navigation.navigate('Register1')}>
            <Text style={styles.textbutton}>Comenzar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}
