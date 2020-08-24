import React from 'react';
import styles from './Style';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import iconatras from '../../resources/imghompro/icono-atras.png';
import iconnoti from '../../resources/imghompro/Icon-Notif-azul.png';
import iconedi from '../../resources/imghompro/Icon-Editar-Azul.png';
import fotoperfil from '../../resources/imghompro/Foto-Usuario-Default.png';
import fotoeditar from '../../resources/imghompro/editar-foto-perfil.png';
import fotopedidos from '../../resources/imghompro/Menu-Pedidos.png';
import fotofav from '../../resources/imghompro/Menu-Favoritos.png';
import userperf from '../../resources/imghompro/Register-Icon-Name.png';
import mailperf from '../../resources/imghompro/Register-Icon-Email.png';
import telperf from '../../resources/imghompro/Register-Icon-Phone.png';
import passperf from '../../resources/imghompro/Register-Icon-Password.png';
import dirperf from '../../resources/imghompro/Register-Icon-Address.png';
import ajusperf from '../../resources/imghompro/Icon-Config.png';
import logo from '../../resources/Logotype-AppMe-Original-App.png';

import {ScrollView} from 'react-native-gesture-handler';

const Perfil = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container2}>
      <TouchableHighlight style={styles.mgbtmp}>
        <Image
          source={iconatras}
          style={styles.ticonmenup32}
          onPress={() => navigation.navigate('hprodis')}
        />
      </TouchableHighlight>
      <View style={styles.btnubno}>
        <TouchableHighlight style={styles.mgbtmp1}>
          <Image source={iconnoti} style={styles.ticonnot} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.mgbtmp3}
          onPress={() =>
            navigation.navigate('OverPerfil', {name: 'EditarPerfil'})
          }>
          <Image source={iconedi} style={styles.ticonnot} />
        </TouchableHighlight>
      </View>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <ScrollView>
        <Text style={styles.txtperfil}>Perfil</Text>

        <View>
          <View>
            <Image source={fotoperfil} style={styles.imgprofile} />
          </View>
          <View>
            <Image source={fotoeditar} style={styles.fotoeditar} />
          </View>
        </View>

        <View>
          <Text style={styles.txtnombreprofile1}>Maximiliano Zepeda Fecci</Text>
          <Text style={styles.txtdireccion1}>Las Hualtas 8838 Vitacura</Text>
          <Text style={styles.txtdireccion1}>Region Metropolitana</Text>
          <View style={styles.viewprofilepedidos}>
            <View style={styles.box}>
              <Image source={fotopedidos} style={styles.fotopedidosperfil} />
              <View>
                <Text style={styles.textpedidosperfil}>Pedidos</Text>
                <Text style={styles.numeroperfil}>15</Text>
              </View>
            </View>
            <View style={styles.box7}>
              <Image source={fotofav} style={styles.fotofavperfil} />
              <View>
                <Text style={styles.textpedidosperfil1}>Favoritos</Text>
                <Text style={styles.numeroperfil1}>10</Text>
              </View>
            </View>
          </View>

          <View style={styles.viewinfousuario}>
            <View style={styles.box10}>
              <Image source={userperf} style={styles.iconoperfil} />
              <Text style={styles.txtinfousuario}>27.767.727-7</Text>
            </View>
            <View style={styles.box10}>
              <Image source={mailperf} style={styles.iconoperfil} />
              <Text style={styles.txtinfousuario}>
                maxi.zepedafecci@gmail.com
              </Text>
            </View>
            <View style={styles.box10}>
              <Image source={telperf} style={styles.iconoperfil} />
              <Text style={styles.txtinfousuario}>+56 9 67590987</Text>
            </View>
            <View style={styles.box10}>
              <Image source={passperf} style={styles.iconoperfil} />
              <Text style={styles.txtinfousuario}>**********</Text>
            </View>
            <View style={styles.box10}>
              <Image source={dirperf} style={styles.iconoperfil} />
              <Text style={styles.txtinfousuario}>
                Las Hualtatas 8838 Vitacura
              </Text>
            </View>
            <View style={styles.box10}>
              <Image source={ajusperf} style={styles.iconoperfil1} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Perfil;
