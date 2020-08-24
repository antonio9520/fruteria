import {
  GUARDAR_PRODUCTOS,
  EDITAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  SUMAR_CARRITO,
  RESTAR_CARRITO,
  ACTUALIZAR_ITEMS,
  ACTUALIZAR_CARRITO,
} from '../types';

const initialState = {
  carrito: [],
  totalPagar: 0,
  error: null,
  loading: false,
  actualizarItems: false,
  actualizarCarrito: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GUARDAR_PRODUCTOS:
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };
    case EDITAR_PRODUCTO:
      return {
        ...state,
        carrito: state.carrito.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto,
        ),
      };
    //payload actua como id
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        carrito: state.carrito.filter(
          (producto) => producto.id !== action.payload,
        ),
      };
    case SUMAR_CARRITO:
      return {
        ...state,
        totalPagar: state.totalPagar + parseInt(action.payload),
      };
    case RESTAR_CARRITO:
      return {
        ...state,
        totalPagar: state.totalPagar - parseInt(action.payload),
      };
    case ACTUALIZAR_ITEMS:
      return {
        ...state,
        actualizarItems: !state.actualizarItems,
      };
    case ACTUALIZAR_CARRITO:
      return {
        ...state,
        actualizarCarrito: !state.actualizarCarrito,
      };
    default:
      return state;
  }
}
