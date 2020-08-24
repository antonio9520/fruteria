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
    marginBottom: 105,
  },
  textbutton: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    fontSize: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 100,
  },
  titulo1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
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
  txtinfti: {
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
  },
});

export default styles;
