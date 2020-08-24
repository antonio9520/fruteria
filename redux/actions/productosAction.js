import {
  GUARDAR_PRODUCTOS,
  EDITAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  SUMAR_CARRITO,
  RESTAR_CARRITO,
  ACTUALIZAR_ITEMS,
  ACTUALIZAR_CARRITO,
} from '../types';
import firebase1 from 'firebase/app';
import 'firebase/firestore';

firebase1.firestore().settings({experimentalForceLongPolling: true});

export function guardarProductosAction(producto) {
  return (dispatch) => {
    dispatch(guardarExito(producto));
  };
}

const guardarExito = (data) => ({
  type: GUARDAR_PRODUCTOS,
  payload: data,
});

export function editarProductoAction(producto) {
  return (dispatch) => {
    dispatch(editarProducto(producto));
  };
}

const editarProducto = (data) => ({
  type: EDITAR_PRODUCTO,
  payload: data,
});

export function eliminarProductoAction(ID) {
  return (dispatch) => {
    dispatch(eliminarProducto(ID));
  };
}

const eliminarProducto = (data) => ({
  type: ELIMINAR_PRODUCTO,
  payload: data,
});

export function sumarCarritoAction(valor) {
  return (dispatch) => {
    dispatch(sumarCarrito(valor));
  };
}

const sumarCarrito = (valor) => ({
  type: SUMAR_CARRITO,
  payload: valor,
});

export function restarCarritoAction(valor) {
  return (dispatch) => {
    dispatch(restarCarrito(valor));
  };
}

const restarCarrito = (valor) => ({
  type: RESTAR_CARRITO,
  payload: valor,
});

export function actualizarItemsAction() {
  return (dispatch) => {
    dispatch(actualizarItems());
  };
}

const actualizarItems = () => ({
  type: ACTUALIZAR_ITEMS,
});

export function actualizarCarritoAction() {
  return (dispatch) => {
    dispatch(actualizarCarrito());
  };
}

const actualizarCarrito = () => ({
  type: ACTUALIZAR_CARRITO,
});
