import React from 'react';
import styles from './Style';
import {View, TouchableHighlight, Image, Text, ScrollView} from 'react-native';
import promoimage from '../../resources/imgHpromo/Producto-Promo-WuaWua.png';
import promoimage1 from '../../resources/imgHpromo/Producto-Promo-WuaWua2.png';
import icon from '../../resources/imghompro/Icon-MenuPrincipal.png';
import iconub from '../../resources/imghompro/Icon-Direccion.png';
import iconfav from '../../resources/imghompro/Menu-Favoritos.png';
import iconpr1 from '../../resources/imghompro/Icono-TipoProdcuto-1.png';
import iconpr2 from '../../resources/imghompro/Icono-TipoProdcuto-2.png';
import iconpr3 from '../../resources/imghompro/Icono-TipoProdcuto-3.png';
import iconpr4 from '../../resources/imghompro/Icono-TipoProdcuto-4.png';

const Promo = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.mgbtmp}
        underlayColor="#F6F7F9"
        onPress={() => navigation.openDrawer()}>
        <Image source={icon} style={styles.ticonmenup} />
      </TouchableHighlight>
      <View style={styles.btnubno}>
        <TouchableHighlight style={styles.mgbtmp10}>
          <Image source={iconub} style={styles.iconosarriba} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.mgbtmp2}>
          <Image source={iconfav} style={styles.iconosarriba} />
        </TouchableHighlight>
      </View>
      <View style={styles.passwordContainer1}>
        <Text style={styles.txtpromo}>Promociones</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.box5}>
          <TouchableHighlight>
            <Image source={iconpr1} style={styles.ticonnot1} />
          </TouchableHighlight>
          <Text style={styles.txttppro}>Frutas</Text>
        </View>
        <View style={styles.box5}>
          <TouchableHighlight>
            <Image source={iconpr2} style={styles.ticonnot1} />
          </TouchableHighlight>
          <Text style={styles.txttppro}>Vegetales</Text>
        </View>
        <View style={styles.box5}>
          <TouchableHighlight>
            <Image source={iconpr3} style={styles.ticonnot1} />
          </TouchableHighlight>
          <Text style={styles.txttppro}>Legumbres</Text>
        </View>
        <View style={styles.box5}>
          <TouchableHighlight>
            <Image source={iconpr4} style={styles.ticonnot1} />
          </TouchableHighlight>
          <Text style={styles.txttppro}>Congelados</Text>
        </View>
      </View>
      <ScrollView style={{marginTop: 12}}>
        <View style={styles.row1}>
          <View style={styles.boxpromo}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() =>
                navigation.navigate('OverPromo', {name: 'VerMas'})
              }>
              <Image source={promoimage} style={styles.image} />
            </TouchableHighlight>
          </View>
          <View style={styles.boxpromo}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() =>
                navigation.navigate('PromoVerMas', {name: 'VerMas'})
              }>
              <Image source={promoimage1} style={styles.image} />
            </TouchableHighlight>
          </View>
          <View style={styles.boxpromo}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() =>
                navigation.navigate('PromoVerMas', {name: 'VerMas'})
              }>
              <Image source={promoimage} style={styles.image} />
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Promo;
