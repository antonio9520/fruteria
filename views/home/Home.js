import React, {useState, useEffect} from 'react';
import styles from './Style';
import {
  View,
  TouchableHighlight,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import icon from '../../resources/imghompro/Icon-MenuPrincipal.png';
import iconub from '../../resources/imghompro/Icon-Direccion.png';
import iconfav from '../../resources/imghompro/Menu-Favoritos.png';
import iconnot from '../../resources/imghompro/Icon-Notification.png';
import iconbus from '../../resources/imghompro/Icon-Buscar.png';
import iconlogot from '../../resources/Logotype-AppMe-Original-App.png';
import iconfilt from '../../resources/imghompro/Menu-Filtros.png';
import iconpr1 from '../../resources/imghompro/Icono-TipoProdcuto-1.png';
import iconpr1act from '../../resources/imghompro/Icono-TipoProdcutoActive-1.png';
import iconpr2 from '../../resources/imghompro/Icono-TipoProdcuto-2.png';
import iconpr2act from '../../resources/imghompro/Icono-TipoProdcutoActive-2.png';
import iconpr3 from '../../resources/imghompro/Icono-TipoProdcuto-3.png';
import iconpr3act from '../../resources/imghompro/Icono-TipoProdcutoActive-3.png';
import iconpr4 from '../../resources/imghompro/Icono-TipoProdcuto-4.png';
import iconpr4act from '../../resources/imghompro/Icono-TipoProdcutoActive-4.png';
import {
  Alimentacion,
  Dormitorio,
  Viajes,
  Baño,
  ValorCarrito,
} from './components';
import {useSelector} from 'react-redux';
import firebase from '../../firebase/Firebase';
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

export default function Home(props) {
  const {navigation} = props;
  const [producto, setProducto] = useState([]);
  const [startProducto, setStartProducto] = useState(null);
  const [totalProducto, setTotalProducto] = useState(0);
  const limitProducto = 15;

  //Sacar los productos desde la bd
  useEffect(() => {
    db.collection('Producto')
      .get()
      .then((snap) => {
        setTotalProducto(snap.size);
      });
    (async () => {
      const resultProducto = [];
      const Producto = db.collection('Producto').orderBy('create', 'asc');

      await Producto.get().then((response) => {
        setStartProducto(response.docs[response.docs.length]);

        response.forEach((doc) => {
          let producto = doc.data();
          producto.id = doc.id;
          console.log(producto);
          resultProducto.push({producto});
        });
        setProducto(resultProducto);
      });
    })();
  }, []);

  const valorTotalPagar = useSelector((state) => state.productos.totalPagar);

  //Resivir el total de producto
  const handleLoadMore = async () => {
    const resultProducto = [];
    producto.length < totalProducto;

    const ProductoDb = db
      .collection('Producto')
      .orderBy('create', 'asc')
      .startAfter(startProducto.data().create)
      .limit(limitProducto);

    await ProductoDb.get().then((response) => {
      if (response.docs.length > 0) {
        setStartProducto(response.docs[response.docs.length - 1]);
      } else {
        // console.log(resultProducto);
      }

      response.forEach((doc) => {
        let producto = doc.data();
        producto.id = doc.id;
        resultProducto.push({producto});
      });

      setProducto([...producto, ...resultProducto]);
    });
  };
  //state pintar botones categoria
  const [active, setactive] = useState('dormitorio');

  //state para guardar los productos filtrados
  const [profilt, setProfilt] = useState([]);
  const [profilt2, setProfilt2] = useState([]);
  const [profilt3, setProfilt3] = useState([]);
  const [profilt4, setProfilt4] = useState([]);
  //Funcion para filtrar por categorias
  const filtrarcate = (categoriavar) => {
    if (categoriavar === 'dormitorio') {
      const filtro = producto.filter((productos) => {
        return productos.producto.categoria.includes(categoriavar);
      });
      setProfilt(filtro);
      setactive('dormitorio');
    } else if (categoriavar === 'viajes') {
      const filtro = producto.filter((productos) => {
        return productos.producto.categoria.includes(categoriavar);
      });
      setProfilt2(filtro);
      setactive('viajes');
    } else if (categoriavar === 'baño') {
      const filtro = producto.filter((productos) => {
        return productos.producto.categoria.includes(categoriavar);
      });
      setProfilt3(filtro);
      setactive('baño');
    } else if (categoriavar === 'alimentacion') {
      const filtro = producto.filter((productos) => {
        return productos.producto.categoria.includes(categoriavar);
      });
      setProfilt4(filtro);
      setactive('alimentacion');
    }
  };
  useEffect(() => {
    const filtro1 = producto.filter((productos) => {
      return productos.producto.categoria.includes('dormitorio');
    });

    setProfilt(filtro1);
    //viajes
    const filtro2 = producto.filter((productos) => {
      return productos.producto.categoria.includes('viajes');
    });
    setProfilt2(filtro2);
    //baño
    const filtro3 = producto.filter((productos) => {
      return productos.producto.categoria.includes('baño');
    });
    setProfilt3(filtro3);
    //alimentacion
    const filtro4 = producto.filter((productos) => {
      return productos.producto.categoria.includes('alimentacion');
    });
    setProfilt4(filtro4);
  }, [producto]);

  console.disableYellowBox = true;
  return (
    <>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.mgbtmp}
          underlayColor="#F6F7F9"
          onPress={() =>
            navigation
              .dangerouslyGetParent()
              .dangerouslyGetParent()
              .openDrawer()
          }>
          <Image source={icon} style={styles.ticonmenup} />
        </TouchableHighlight>
        <View style={styles.achique}>
          <Image source={iconlogot} style={styles.logoHome}/>
        </View>
        <View style={styles.contIcons}>
          <TouchableHighlight
            style={styles.mgbtmp10}
            // onPress={() => navigation.navigate('Hprofile')}
          >
            <Image source={iconub} style={styles.iconosarriba} />
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.mgbtmp2}
            onPress={() =>
              navigation.navigate('OverHome', {name: 'AjustesHome'})
            }>
            <Image source={iconfav} style={styles.iconosarriba} />
          </TouchableHighlight>
        </View>
        <View style={styles.contNoti}>
          <TouchableHighlight
            style={styles.mgbtmp3}
            // onPress={() => navigation.navigate('Ajuste')}
          >
            <Image source={iconnot} style={styles.ticonnot} />
          </TouchableHighlight>
        </View>
        <View style={styles.passwordContainer}>
          <Image source={iconbus} style={styles.tamiconbus} />
          <TextInput
            style={styles.borde}
            placeholder="Busca tu producto Aqui"
            onChangeText={(NomCom) => this.setState({NomCom})}
          />
          <TouchableNativeFeedback onPress={() => navigation.openDrawer()}>
            <Image source={iconfilt} style={styles.tamiconbus} />
          </TouchableNativeFeedback>
        </View>

        <View style={styles.row}>
          <ScrollView
            horizontal={true}
            style={{height: 110, width: '100%', left: '8%', top: '6%'}}>
            <View
              style={active === 'dormitorio' ? styles.boxactive : styles.box5}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => filtrarcate('dormitorio')}>
                {active === 'dormitorio' ? (
                  <Image source={iconpr1act} style={styles.ticonnot1} />
                ) : (
                  <Image source={iconpr1} style={styles.ticonnot1} />
                )}
              </TouchableHighlight>
              <Text style={styles.txttppro}>Frutas</Text>
            </View>
            <View style={active === 'viajes' ? styles.boxactive : styles.box5}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => filtrarcate('viajes')}>
                {active === 'viajes' ? (
                  <Image source={iconpr2act} style={styles.ticonnot1} />
                ) : (
                  <Image source={iconpr2} style={styles.ticonnot1} />
                )}
              </TouchableHighlight>
              <Text style={styles.txttppro}>Vegetales</Text>
            </View>
            <View style={active === 'baño' ? styles.boxactive : styles.box5}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => filtrarcate('baño')}>
                {active === 'baño' ? (
                  <Image source={iconpr3act} style={styles.ticonnot1} />
                ) : (
                  <Image source={iconpr3} style={styles.ticonnot1} />
                )}
              </TouchableHighlight>
              <Text style={styles.txttppro}>Legumbres</Text>
            </View>
            <View
              style={
                active === 'alimentacion' ? styles.boxactive : styles.box5
              }>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => filtrarcate('alimentacion')}>
                {active === 'alimentacion' ? (
                  <Image source={iconpr4act} style={styles.ticonnot1} />
                ) : (
                  <Image source={iconpr4} style={styles.ticonnot1} />
                )}
              </TouchableHighlight>
              <Text style={styles.txttppro}>Congelados</Text>
            </View>
          </ScrollView>
        </View>

        <ScrollView style={{marginTop: 12}}>
          <View
            style={active === 'dormitorio' ? styles.listview : styles.listnone}>
            <Dormitorio
              handleLoadMore={handleLoadMore}
              navigation={navigation}
              profilt={profilt}
            />
          </View>
          <View style={active === 'viajes' ? styles.listview : styles.listnone}>
            <Viajes
              producto={producto}
              handleLoadMore={handleLoadMore}
              navigation={navigation}
              profilt={profilt2}
              active={active}
            />
          </View>
          <View style={active === 'baño' ? styles.listview : styles.listnone}>
            <Baño
              producto={producto}
              handleLoadMore={handleLoadMore}
              navigation={navigation}
              profilt={profilt3}
              active={active}
            />
          </View>
          <View
            style={
              active === 'alimentacion' ? styles.listview : styles.listnone
            }>
            <Alimentacion
              producto={producto}
              handleLoadMore={handleLoadMore}
              navigation={navigation}
              profilt={profilt4}
            />
          </View>
        </ScrollView>
        {valorTotalPagar > 0 ? (
          <ValorCarrito
            navigation={navigation}
            valorTotalPagar={valorTotalPagar}
          />
        ) : null}
      </View>
    </>
  );
}
