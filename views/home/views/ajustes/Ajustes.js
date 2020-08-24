import React, {useState} from 'react';
import {View, Text, TouchableHighlight, Image, Switch} from 'react-native';
import mediosdepago from '../../../../resources/tabsicon/Menu-MediosdePago.png';
import notificaciones from '../../../../resources/imghompro/Icon-Notif-azul.png';
import styles from './Style';
import atras from '../../../../resources/imghompro/icono-atras.png';

export default function Ajustes(props) {
  const {navigation} = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="#F6F7F9"
        onPress={() => navigation.navigate('Drawer')}
        style={styles.heighttouch}>
        <Image source={atras} style={styles.ticonnot2} />
      </TouchableHighlight>

      <Text style={styles.titulo}>Ajustes</Text>
      <View style={styles.row}>
        <View style={styles.bgimage}>
          <Image source={notificaciones} style={styles.ticonnot1} />
        </View>
        <Text style={styles.textobotonera}>Notificaciones</Text>
        <Switch
          trackColor={{false: '#72B2FA', true: '#D0E5FB'}}
          thumbColor={isEnabled ? '#72B2FA' : '#D0E5FB'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{marginLeft: 135, marginTop: 10}}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.bgimage}>
          <Image source={mediosdepago} style={styles.ticonnot1} />
        </View>
        <TouchableHighlight>
          <Text style={styles.textobotonera}>Medios de pago</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
