import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  imagen: {
    alignSelf: 'center',
    width: 250,
    height: 310,
    marginTop: 50,
  },
  ups: {
    fontSize: 80,
    color: '#1580F7',
    alignSelf: 'center',
  },
  texto: {
    alignSelf: 'center',
    color: '#ADB4BE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  boton: {
    backgroundColor: '#1680F8',
    width: 300,
    height: 60,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'center',
    marginTop: 100,
  },
  reintentar: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 18,
  },
  ticonmenup: {
    width: 20,
    height: 20,
  },
  botonatras: {
    marginTop: 12,
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  mgbtmp1: {
    marginTop: -20,
    marginLeft: 300,
    backgroundColor: '#F6F7F8',
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  ticonnot: {
    width: 23,
    height: 23,
    alignSelf: 'center',
  },
  mgbtmp3: {
    marginTop: -30,
    marginLeft: 345,
    backgroundColor: '#F6F7F8',
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  txt: {
    color: '#AFB6C3',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 23,
    marginTop: 1,
  },
  txtdia: {
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 23,
    marginTop: 15,
    color: '#5F5F6B',
  },
  selechora: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    height: 70,
    width: 330,
    alignSelf: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#FFFFFF',
    marginTop: 13,
    elevation: 4,
  },
  txthora: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 22,
    fontSize: 18,
    color: '#5F5F6B',
  },
  vcosto: {
    marginLeft: 30,
    marginTop: 12,
  },
  txtcosto: {
    fontWeight: 'bold',
    color: '#5F5F6B',
  },
  txtcosto1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#CDD1D6',
  },
  cajairapagar: {
    flexDirection: 'row',
    backgroundColor: '#49A83F',
    height: 60,
    width: 360,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 1,
    marginLeft: 20,
  },
  boxcantidad: {
    backgroundColor: '#7BC174',
    marginLeft: 10,
    height: 35,
    width: 35,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 5,
    alignSelf: 'center',
  },
  vaciarcarro: {
    color: '#1680F8',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 10,
  },
  txtcantidad: {
    fontSize: 24,
    alignSelf: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
  txtirpagar: {
    fontSize: 20,
    color: '#E6FFFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginLeft: 80,
  },
  txtpagar: {
    fontSize: 18,
    color: '#E6FFFF',
    alignSelf: 'center',
    marginLeft: 60,
  },
  vcalendario: {
    height: 58,
    width: 350,
    alignSelf: 'center',
  },
  vpropina: {
    marginLeft: 100,
    marginTop: 12,
  },
  vpago: {
    flexDirection: 'row',
  },
  mas: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#CDD1D6',
    marginLeft: 100,
    marginTop: -30,
  },
  icono: {
    height: 22,
    width: 22,
    marginTop: 15,
    marginLeft: 10,
  },
  vdireccion: {
    borderBottomWidth: 4,
    borderColor: '#F7F7F9',
    height: 60,
    width: 398,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 13,
    flexDirection: 'row',
  },
  vvdireccion: {
    width: 250,
    marginTop: 15,
    marginLeft: -60,
  },
  txtdireccion: {
    fontWeight: 'bold',
    color: '#5F5F6B',
  },
  txttitulodir: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#AEB4C2',
  },
  txtcambiar: {
    color: '#1680F8',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 30,
    fontSize: 12,
  },
  vdep: {
    borderBottomWidth: 5,
    borderColor: '#F7F7F9',
    height: 50,
    width: 398,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 3,
    flexDirection: 'row',
  },
  txtdepto: {
    color: 'grey',
    alignSelf: 'center',
    marginLeft: 50,
  },
  vtipoentrega: {
    borderBottomWidth: 4,
    borderColor: '#F7F7F9',
    height: 160,
    width: 390,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 4,
  },
  imgtipo: {
    width: 70,
    height: 70,
  },
  vimgtipo: {
    borderWidth: 3,
    borderColor: '#F7F7F9',
    width: 100,
    height: 105,
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  txttipo: {
    color: '#AAB5C7',
    fontSize: 10,
    fontWeight: 'bold',
  },
  txtentrega: {
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
    color: '#5F5F6B',
  },
  vimagenes: {
    flexDirection: 'row',
  },
  vtusproductos: {
    borderBottomWidth: 1,
    borderColor: '#F7F7F9',
    height: 80,
    width: 390,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 3,
  },
  vimgtprod: {
    height: 60,
    width: 120,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginLeft: 270,
    marginTop: -32,
    flexDirection: 'row',
  },
  iconprod: {
    width: 45,
    height: 45,
    alignSelf: 'center',
  },
  iconovermas: {
    width: 15,
    height: 15,
    marginLeft: 6,
    alignSelf: 'center',
  },
  ventregaest: {
    borderWidth: 1,
    borderColor: '#F7F7F9',
    height: 35,
    width: 390,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 3,
    flexDirection: 'row',
  },
  txtminutos: {
    fontWeight: 'bold',
    marginLeft: 220,
    marginTop: 8,
    fontSize: 12,
  },
  txtestimada: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#AAB5C7',
    marginTop: 8,
    marginLeft: 10,
  },
  txtproductos: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 14,
    color: '#5F5F6B',
  },
  vformadepago: {
    borderBottomWidth: 1,
    borderColor: '#F7F7F9',
    height: 120,
    width: 390,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 30,
    flexDirection: 'row',
  },
  imgtipo1: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  vimgtipo1: {
    borderWidth: 3,
    borderColor: '#F7F7F9',
    width: 100,
    height: 80,
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 10,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  vtusproductos1: {
    borderBottomWidth: 1,
    borderColor: '#F7F7F9',
    height: 10,
    width: 390,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 3,
  },
  vimagenes1: {
    flexDirection: 'row',
    marginLeft: -80,
  },
  vtipoentrega1: {
    borderBottomWidth: 4,
    borderColor: '#F7F7F9',
    height: 40,
    width: 390,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 4,
  },
  vdep1: {
    borderBottomWidth: 3,
    borderColor: '#F7F7F9',
    height: 35,
    width: 398,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 3,
    flexDirection: 'row',
  },
  txtminutos1: {
    fontWeight: 'bold',
    marginLeft: 285,
    marginTop: -15,
    fontSize: 12,
  },
  icono1: {
    height: 25,
    width: 25,
    marginTop: 1,
    marginLeft: 20,
  },
  txtdepto1: {
    color: 'grey',
    alignSelf: 'center',
    marginLeft: 10,
    marginBottom: 1,
  },
  txtdepto2: {
    color: 'grey',
    alignSelf: 'center',
    marginLeft: 20,
    marginBottom: 1,
  },
  vforpago: {
    flexDirection: 'row',
  },
  viewpago: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: '#F7F7F9',
    height: 120,
    width: 390,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  txtforma: {
    fontWeight: 'bold',
    marginLeft: 10,

    fontSize: 14,
    color: '#5F5F6B',
  },
  txttituloproductos: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#5F5F6B',
    paddingBottom: 6,
  },
  iconovermas1: {
    width: 15,
    height: 15,
    marginLeft: 200,
    alignSelf: 'center',
  },
  confirmar: {
    flexDirection: 'row',
    backgroundColor: '#1680F8',
    height: 60,
    width: 360,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 20,
    marginLeft: 20,
  },
  txtprecioconfirmar: {
    color: 'grey',
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 11,
  },
  iconprod1: {
    width: 45,
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#4BB76C',
    marginLeft: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  vdep2: {
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: '#F7F7F9',
    height: 45,
    width: 398,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 13,
    flexDirection: 'row',
  },
  txtotal: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 20,
    marginTop: 16,
  },
  txtpreciototal: {
    fontWeight: '600',
    fontSize: 22,
    marginLeft: 20,
    marginTop: 10,
  },
  vwtotal: {
    borderBottomWidth: 3,
    borderColor: '#F7F7F9',
    height: 90,
    width: 398,
  },
  vimgtipo2: {
    width: 100,
    height: 105,
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  vtcredito: {
    borderBottomWidth: 4,
    borderColor: '#F7F7F9',
    height: 140,
    width: 390,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 4,
  },
  imgtarjeta: {
    height: 170,
    width: 270,
    alignSelf: 'center',
    marginTop: 10,
  },
  vwdatostarjeta: {
    height: 125,
    width: 390,
  },
  datostarjeta: {
    height: 40,
    width: 350,
    borderWidth: 3,
    borderColor: '#F7F7F9',
    marginTop: 15,
    marginLeft: 15,
    backgroundColor: '#F7F7F9',
    borderRadius: 8,
  },
  btatras: {
    flexDirection: 'row',
    backgroundColor: '#1680F8',
    height: 45,
    width: 105,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 1,
    marginLeft: 20,
  },
  txtatras: {
    fontSize: 20,
    color: '#E6FFFF',
    alignSelf: 'center',
  },
  ticonmenup2: {
    width: 15,
    height: 15,
    marginTop: 15,
  },
  btsgt: {
    flexDirection: 'row',
    backgroundColor: '#1680F8',
    height: 45,
    width: 105,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 1,
    marginLeft: 140,
  },
  ntarjeta: {
    fontWeight: 'bold',
  },
  txtcambiar1: {
    color: '#1680F8',
    alignSelf: 'center',
    marginTop: 1,
    marginLeft: 150,
    fontSize: 12,
  },
  cargando1: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 100,
  },
  txtcargando: {
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 60,
  },
  vvdireccion1: {
    alignSelf: 'center',
    width: 250,
  },
  iconocarrito: {
    width: 55,
    height: 55,
    alignSelf: 'center',
  },
  textocreado: {
    color: '#3682E2',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 1,
    alignSelf: 'center',
  },
  fechacreada: {
    borderWidth: 2,
    borderColor: '#F7F7F9',
    height: 80,
    width: 350,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 3,
    borderRadius: 10,
    elevation: 3,
  },
  horacreada: {
    fontWeight: 'bold',
    color: '#5F5F6B',
    marginLeft: 20,
    fontSize: 20,
  },
  txtfechcre: {
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#AEB4C2',
  },
  txtcambiarcreado: {
    color: '#1680F8',
    alignSelf: 'center',
    marginLeft: 250,
    fontSize: 12,
    marginTop: -20,
  },
  iconprod2: {
    width: 45,
    height: 45,
    marginLeft: 20,
    marginTop: 6,
    backgroundColor: '#4BB76C',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  fechacreada2: {
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderColor: '#F7F7F9',
    height: 230,
    width: 350,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 3,
    borderRadius: 10,
  },
  txtmetodocreado: {
    fontWeight: 'bold',
    marginLeft: 80,
    marginTop: -35,
    fontSize: 12,
  },
  txttotalcreado: {
    fontWeight: 'bold',
    marginTop: 38,
    marginLeft: 15,
  },
  txtpreciocreado: {
    fontWeight: 'bold',
    marginLeft: 250,
    marginTop: -18,
  },
});

export default styles;
