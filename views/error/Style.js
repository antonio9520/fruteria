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
});

export default styles;
