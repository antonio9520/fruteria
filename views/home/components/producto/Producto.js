import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  guardarProductosAction,
  editarProductoAction,
  eliminarProductoAction,
  sumarCarritoAction,
  restarCarritoAction,
  actualizarCarritoAction,
} from '../../../../redux/actions/productosAction';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import iconfa from '../../../../resources/imghompro/Icon-Favorito-Active.png';
import iconfa1 from '../../../../resources/imghompro/Icon-Favorito.png';
import styles from './Style';
import firebase from '../../../../firebase/Firebase';


firebase.firestore().settings({experimentalForceLongPolling: true});

const Producto = (props) => {
  const {producto} = props;
  const {
    name,
    descripcion,
    valorTotal,
    images,
    categoria,
    id,
  } = producto.item.producto;
  const dispatch = useDispatch();

  const [cantidad, setCantidad] = useState(0);
  const suma = valorTotal;
  const [fav, setfav] = useState(false);
  const actualizar = useSelector((state) => state.productos.actualizarItems);
  const productoRedux = useSelector((state) => state.productos.carrito);

  useEffect(() => {
    productoRedux.map((producto) => {
      if (id === producto.id) {
        setCantidad(producto.cantidad);
      }
    });
    //eslint-disable-next-line
  }, [actualizar]);

  //Favoritos no favoritos
  const favoritos = () => {
    setfav(!fav);
  };

  //incrementar en uno la cantidad de producto
  const incrementaruno = () => {
    const nuevaCantidad = parseInt(cantidad) + 1;
    setCantidad(nuevaCantidad);
    dispatch(sumarCarritoAction(suma));
    if (nuevaCantidad === 1) {
      dispatch(
        guardarProductosAction({
          name,
          descripcion,
          valorTotal,
          images,
          categoria,
          id,
          cantidad: nuevaCantidad,
        }),
      );
    } else if (nuevaCantidad > 1) {
      dispatch(
        editarProductoAction({
          name,
          descripcion,
          valorTotal,
          images,
          categoria,
          id,
          cantidad: nuevaCantidad,
        }),
      );
      dispatch(actualizarCarritoAction());
    }
  };

  //Decremento
  const decrementaruno = () => {
    if (cantidad > 0) {
      const nuevaCantidad = parseInt(cantidad) - 1;
      setCantidad(nuevaCantidad);
      dispatch(restarCarritoAction(suma));
      dispatch(
        editarProductoAction({
          name,
          descripcion,
          valorTotal,
          images,
          categoria,
          id,
          cantidad: nuevaCantidad,
        }),
      );
      dispatch(actualizarCarritoAction());
      if (nuevaCantidad === 0) {
        dispatch(eliminarProductoAction(id));
      }
    }
  };
  let masonumero;
  let menosnumero;

  if (cantidad === 0) {
    masonumero = <Text style={styles.txtbtn}>+</Text>;
    menosnumero = <Text style={{display: 'none'}}>- </Text>;
  } else {
    masonumero = <Text style={styles.txtbtn}>{cantidad.toString()}</Text>;
    menosnumero = <Text style={styles.txtbtn2}>- </Text>;
  }

  const [imageTrabajo, setImageTrabajo] = useState(null);
  useEffect(() => {
    const image = images[0];
    firebase
      .storage()
      .ref(`trabajos-images/${image}`)
      .getDownloadURL()
      .then((result) => {
        setImageTrabajo(result);
      });
  });
  useEffect(() => {
    setCantidad(0);
  }, []);

  return (
    <View style={styles.rowItems}>
      <View style={styles.box4}>
        <TouchableHighlight onPress={favoritos} underlayColor="transparent">
          {fav ? (
            <Image source={iconfa1} style={styles.ticonnot3} />
          ) : (
            <Image source={iconfa} style={styles.ticonnot3} />
          )}
        </TouchableHighlight>
        <TouchableHighlight>
          <Image
            resizeMode="cover"
            source={{uri: imageTrabajo}}
            style={styles.ticonnot2}
          />
        </TouchableHighlight>
        <Text style={styles.NProtxt}>{name.substr(0, 19)}</Text>
        <Text style={styles.SNPtxt}>{descripcion.substr(0, 19)}</Text>
        <Text style={styles.Pretxt}>${valorTotal}</Text>
        <View style={styles.rowbtn}>
          <TouchableHighlight
            style={styles.btnmas1}
            underlayColor="#1A9CD6" 
            onPress={() => decrementaruno()}>
            {menosnumero}
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.btnmas}
            underlayColor="#D01074"
            onPress={() => incrementaruno()}>
            {masonumero}
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Producto;
