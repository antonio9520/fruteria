import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import styles from '../../Style';
import favoron from '../../../../resources/imgcarrito/Icon-Favorito.png';
import {
  editarProductoAction,
  eliminarProductoAction,
  sumarCarritoAction,
  restarCarritoAction,
  actualizarItemsAction,
} from '../../../../redux/actions/productosAction';
import firebase from '../../../../firebase/Firebase';
import {useDispatch, useSelector} from 'react-redux';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

const Producto = (props) => {
  const {producto} = props;
  const {
    name,
    descripcion,
    valorTotal,
    cantidad,
    images,
    categoria,
    id,
  } = producto.item;
  const [cantidadP, setCantidadP] = useState(cantidad);

  const dispatch = useDispatch();
  const actualizar = useSelector((state) => state.productos.actualizarCarrito);
  const productoRedux = useSelector((state) => state.productos.carrito);

  useEffect(() => {
    productoRedux.map((producto) => {
      if (id === producto.id) {
        setCantidadP(producto.cantidad);
      }
    });
    //eslint-disable-next-line
  }, [actualizar]);

  const incrementaruno = () => {
    const nuevaCantidad = parseInt(cantidadP) + 1;
    setCantidadP(nuevaCantidad);
    dispatch(sumarCarritoAction(valorTotal));

    if (nuevaCantidad > 0) {
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
    }
    dispatch(actualizarItemsAction());
  };

  const decrementaruno = () => {
    if (cantidadP > 0) {
      const nuevaCantidad = parseInt(cantidadP) - 1;
      setCantidadP(nuevaCantidad);
      dispatch(restarCarritoAction(valorTotal));
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
      dispatch(actualizarItemsAction());
      if (nuevaCantidad === 0) {
        setTimeout(() => {
          dispatch(eliminarProductoAction(id));
        }, 200);
      }
    }
  };

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

  return (
    <View style={styles.box1}>
      <View style={styles.contenedorproducto}>
        <Image
          resizeMode="cover"
          source={{uri: imageTrabajo}}
          style={styles.fotoprod}
        />

        <TouchableHighlight style={styles.favoron}>
          <Image source={favoron} style={styles.favoron} />
        </TouchableHighlight>
        <Text style={styles.nombreprod}>{name}</Text>
        <Text style={styles.nombretipoprod}>{descripcion}</Text>
        <Text style={styles.txtprecio}>{valorTotal}</Text>

        <View style={styles.botonespedidos}>
          <TouchableHighlight
            onPress={() => decrementaruno()}
            style={{height: '100%', borderTopLeftRadius: 15}}
            underlayColor="#1A9CD6">
            <Text style={styles.txtbotones}>- </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.botonespedidos1}>
          <TouchableHighlight
            underlayColor="#D01074"
            style={{
              height: '100%',
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 20,
            }}
            onPress={() => incrementaruno()}>
            <Text style={styles.txtbotones}>{cantidadP}</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Producto;
