import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 55,
    justifyContent: 'space-between',
    marginTop: -150,
    marginBottom: -60,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
    marginBottom: 25,
  },
  box: {
    flex: 1,
    height: 20,
    marginLeft: 40,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSeguir: {
    backgroundColor: '#4CB86A',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    width: 350,
    marginBottom: 65,
    marginTop: 40,
  },
  textbutton: {
    fontWeight: 'bold',
    color: '#FFF',
    alignItems: 'center',
    fontSize: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 82,
    marginLeft: -65,
  },
  titulo1: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    marginLeft: -65,
  },
  titulo2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 0,
  },
  titulo3: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 80,
  },
  mgb: {
    width: 100,
    height: 100,
    marginBottom: 55,
  },
  textow1: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 20,
    marginLeft: -70,
  },

  textow2: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: -70,
    marginBottom: 20,
  },
  passwordContainer1: {
    width: 350,
    height: 100,
    borderWidth: 0.2,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
  },
  borde: {
    fontSize: 45,
    textAlign: 'center',
    marginTop: 8,
  },
  textoree: {
    fontSize: 16,
    marginRight: 140,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  textoree1: {
    fontSize: 16,
    marginRight: 120,
    marginLeft: 10,
    marginBottom: 8,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tamicon: {
    width: 20,
    height: 20,
    marginBottom: 18,
    marginLeft: -20,
  },
  checkbox: {
    width: 10,
    height: 10,
    marginRight: 15,
    marginBottom: 8,
  },
  margintopcheck: {
    marginTop: 125,
    marginBottom: 20,
    marginLeft: -45,
  },
  margintopcheck1: {
    marginBottom: 20,
    marginLeft: -60,
  },
});

export default styles;
