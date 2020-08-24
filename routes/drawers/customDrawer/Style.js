import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fotoperfil: {
    marginTop: 10,
    width: 40,
    height: 40,
  },
  nombre: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cabezera: {
    marginLeft: 10,
  },
  botonera: {
    marginLeft: 40,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginVertical: 10,
  },
  botoneraLogout: {
    marginTop: 100,
    marginLeft: 100,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  tamicon: {
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#F6F7F9',
    borderRadius: 5,
  },
  tamiconlog: {
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  txtbotoneslog: {
    marginTop: 4,
    fontWeight: 'bold',
    color: '#7E7D82',
  },
  txtbotones: {
    marginTop: 4,
    fontWeight: 'bold',
    color: '#D6D9DC',
  },
});

export default styles;
