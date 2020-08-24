import React from 'react';
import {View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import styles from './Style';
import promoimage from '../../../../resources/imgHpromo/Producto-Promo-WuaWua.png';
import iconpr5 from '../../../../resources/imgHpromo/Producto-Home-1.png';
import iconpr6 from '../../../../resources/imgHpromo/Producto-Home-2.png';
import iconpr7 from '../../../../resources/imgHpromo/Producto-Home-3.png';
import iconpr8 from '../../../../resources/imgHpromo/Producto-Home-4.png';
import iconfa1 from '../../../../resources/imghompro/Icon-Favorito-Active.png';

export default function VerMas(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View>
        <Image source={promoimage} style={styles.image} />
      </View>
      <View style={styles.viewinterno}>
        <View style={styles.conprofe}>
          <Text style={styles.txt1}>tenemos una oferta para ti</Text>
          <Text style={styles.txttitle}>Promocion Mamá</Text>
          <Text style={styles.txtdescripcion}>
            Eres por primera vez mamá y es motivo de celebracion y por ello
            tenemos esta increible promocion
          </Text>
          <Text style={styles.txt1}>Que Incluye</Text>
          <ScrollView stle={styles.mgscv}>
            <View style={styles.row}>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr5} style={styles.ticonnot2} />
                </TouchableHighlight>

                <Text style={styles.txtpf}>Comoda Mudador </Text>
              </View>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr6} style={styles.ticonnot2} />
                </TouchableHighlight>
                <Text style={styles.txtpf}>Ameli Corral</Text>
              </View>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr7} style={styles.ticonnot2} />
                </TouchableHighlight>
                <Text style={styles.txtpf}>Baranda Stokke</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr8} style={styles.ticonnot2} />
                </TouchableHighlight>
                <Text style={styles.txtpf}>Baranda Stokke</Text>
              </View>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr5} style={styles.ticonnot2} />
                </TouchableHighlight>
                <Text style={styles.txtpf}>Comoda Mudador</Text>
              </View>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr6} style={styles.ticonnot2} />
                </TouchableHighlight>
                <Text style={styles.txtpf}>Ameli Corral</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr7} style={styles.ticonnot2} />
                </TouchableHighlight>
                <Text style={styles.txtpf}>Tomate</Text>
                <Text style={styles.txtpfs}>Unidad</Text>
              </View>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr8} style={styles.ticonnot2} />
                </TouchableHighlight>
                <Text style={styles.txtpf}>Brocoli</Text>
                <Text style={styles.txtpfs}>1 Kilo</Text>
              </View>
              <View style={styles.box4}>
                <Image source={iconfa1} style={styles.ticonnot3} />
                <TouchableHighlight>
                  <Image source={iconpr5} style={styles.ticonnot2} />
                </TouchableHighlight>
                <Text style={styles.txtpf}>Tomate</Text>
                <Text style={styles.txtpfs}>Unidad</Text>
              </View>
            </View>
          </ScrollView>
          <TouchableHighlight style={styles.stybtn}>
            <Text style={styles.txtbtn}>Agregar al Carro</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
