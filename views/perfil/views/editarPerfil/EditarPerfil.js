import React from 'react';
import styles from '../../Style';
import {View, TouchableHighlight, Image, TextInput, Text} from 'react-native';
import iconatras from '../../../../resources/imghompro/icono-atras.png';
import iconnoti from '../../../../resources/imghompro/Icon-Notif-azul.png';
import iconedi from '../../../../resources/imghompro/Icon-Editar-Azul.png';
import fotoperfil from '../../../../resources/imghompro/Foto-Usuario-Default.png';
import fotoeditar from '../../../../resources/imghompro/editar-foto-perfil.png';
import mailperf from '../../../../resources/imghompro/Register-Icon-Email.png';
import telperf from '../../../../resources/imghompro/Register-Icon-Phone.png';
import passperf from '../../../../resources/imghompro/Register-Icon-Password.png';
import iconubi from '../../../../resources/imghompro/Register-Icon-Address.png';
import userperf from '../../../../resources/imghompro/Register-Icon-Name.png';
import logo from '../../../../resources/logotipo.png';
import {ScrollView} from 'react-native-gesture-handler';

const EditarPerfil = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container1}>
      <TouchableHighlight
        style={styles.mgbtmp}
        onPress={() => navigation.navigate('Hprofile')}>
        <Image source={iconatras} style={styles.ticonmenup32} />
      </TouchableHighlight>
      <View style={styles.btnubno}>
        <TouchableHighlight style={styles.mgbtmp1}>
          <Image source={iconnoti} style={styles.ticonnot} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.mgbtmp3}
          onPress={() => navigation.navigate('Eprofile')}>
          <Image source={iconedi} style={styles.ticonnot} />
        </TouchableHighlight>
      </View>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <ScrollView>
        <Text style={styles.txtperfil}>Perfil</Text>
        <Image source={fotoperfil} style={styles.imgprofile} />
        <TouchableHighlight style={styles.fotoeditar}>
          <Image source={fotoeditar} style={styles.fotoeditar} />
        </TouchableHighlight>
        <View style={styles.box13}>
          <View style={styles.box10}>
            <Image source={userperf} style={styles.iconoperfil} />
          </View>
          <View style={styles.box10}>
            <Image source={userperf} style={styles.iconoperfil} />
          </View>
          <View style={styles.box10}>
            <Image source={mailperf} style={styles.iconoperfil} />
          </View>
          <View style={styles.box10}>
            <Image source={telperf} style={styles.iconoperfil} />
          </View>
        </View>

        <View style={styles.box11}>
          <View style={styles.box10}>
            <Image source={passperf} style={styles.iconoperfil} />
            <TextInput
              style={styles.alineperfil}
              placeholder="Nueva Contraseña  "
            />
          </View>
          <View style={styles.box10}>
            <Image source={passperf} style={styles.iconoperfil} />
            <TextInput
              style={styles.alineperfil}
              placeholder="Confirmar Contraseña"
            />
          </View>
        </View>

        <View style={styles.box33}>
          <View style={styles.box10}>
            <Image source={iconubi} style={styles.iconoperfil} />
            <Text>Ingresa nueva direccion</Text>
          </View>
        </View>
        <View style={styles.center2}>
          <TouchableHighlight
            style={styles.btnSeguir}
            underlayColor="#F3F306"
            onPress={this.singUpUser}>
            <Text style={styles.textbutton}>Guardar</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditarPerfil;
