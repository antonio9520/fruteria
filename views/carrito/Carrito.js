import React from 'react';
import {View, TouchableHighlight, Image, Text, FlatList} from 'react-native';
import styles from './Style';
import icon from '../../resources/imghompro/Icon-MenuPrincipal.png';
import iconub from '../../resources/imghompro/Icon-Direccion.png';
import iconnot from '../../resources/imghompro/Icon-Notif-azul.png';
import proddefault from '../../resources/imgHpromo/Producto-Home-1.png';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Producto from './components/producto/Producto';

const Carrito = (props) => {
  const {navigation} = props;
  const productos = useSelector((state) => state.productos.carrito);
  const totalPagarCarrito = useSelector((state) => state.productos.totalPagar);

  return (
    <View style={styles.container1}>
      <TouchableHighlight
        style={styles.mgbtmp}
        onPress={() =>
          navigation.dangerouslyGetParent().dangerouslyGetParent().openDrawer()
        }>
        <Image source={icon} style={styles.ticonmenup} />
      </TouchableHighlight>
      <View style={styles.btnubno}>
        <TouchableHighlight style={styles.mgbtmp1}>
          <Image source={iconub} style={styles.ticonnot} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.mgbtmp3}>
          <Image source={iconnot} style={styles.ticonnot} />
        </TouchableHighlight>
      </View>

      <Text style={styles.textomicarro}>Mi Carro</Text>
      <ScrollView>
        <View style={{flex: 1}}>
          {productos ? (
            <FlatList
              keyExtractor={(productos) => productos.id}
              data={productos}
              renderItem={(producto) => <Producto producto={producto} />}
            />
          ) : (
            <Text>No hay productos</Text>
          )}
        </View>

        {productos.length > 3 ? (
          <>
            <View>
              <Text style={styles.txtpodrias}>
                Podrias combinar tu pedido con:
              </Text>
              <View style={styles.box2}>
                <ScrollView horizontal={true}>
                  <View style={styles.boxscroll}>
                    <Image source={proddefault} style={styles.fotoprodrec} />
                    <Text style={styles.nombreprod}>Comoda Mudador</Text>
                    <Text style={styles.nombretipoprod}>HAZY GREY</Text>
                    <Text style={styles.txtprecio}>$77.990</Text>
                  </View>
                  <View style={styles.boxscroll}>
                    <Image source={proddefault} style={styles.fotoprodrec} />
                    <Text style={styles.nombreprod}>Comoda Mudador</Text>
                    <Text style={styles.nombretipoprod}>HAZY GREY</Text>
                    <Text style={styles.txtprecio}>$77.990</Text>
                  </View>
                  <View style={styles.boxscroll}>
                    <Image source={proddefault} style={styles.fotoprodrec} />
                    <Text style={styles.nombreprod}>Comoda Mudador</Text>
                    <Text style={styles.nombretipoprod}>HAZY GREY</Text>
                    <Text style={styles.txtprecio}>$77.990</Text>
                  </View>
                  <View style={styles.boxscroll}>
                    <Image source={proddefault} style={styles.fotoprodrec} />
                    <Text style={styles.nombreprod}>Comoda Mudador</Text>
                    <Text style={styles.nombretipoprod}>HAZY GREY</Text>
                    <Text style={styles.txtprecio}>$77.990</Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </>
        ) : null}
      </ScrollView>

      <TouchableHighlight
        style={{bottom: 5}}
        underlayColor="#FFFFFF"
        onPress={() => navigation.navigate('OverCarrito', {name: 'Agendar'})}>
          
        <View style={styles.pagarContainer}>
          <View style={styles.cajairapagar}>
            <View style={styles.boxcantidad}>
              <Text style={styles.txtcantidad}>4</Text>
            </View>
            <Text style={styles.txtirpagar}>Ir a Pagar</Text>
            <Text style={styles.txtpagar}>${totalPagarCarrito}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Carrito;
