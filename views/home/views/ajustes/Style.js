import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  titulo: {
    textAlign: 'justify',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B3B3B3',
    marginVertical: 85,
    marginHorizontal: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal: 50,
  },
  ticonnot1: {
    width: 25,
    height: 25,
    marginLeft: 1,
    marginRight: 3,
    marginTop: 5,
    backgroundColor: '#F5F7F9',
    borderRadius: 10,
  },
  ticonnot2: {
    width: 35,
    height: 35,
    marginLeft: 7,
    alignItems: 'center',
    borderRadius: 10,
  },
  textobotonera: {
    textAlign: 'center',
    color: '#8BC0FA',
    marginLeft: 10,
  },
  bgimage: {
    marginTop: 5,
    backgroundColor: '#F5F7F9',
    borderRadius: 10,
  },
  heighttouch: {
    marginTop: 15,
    height: 60,
    width: 40,
    borderRadius: 80,
  },
});

export default styles;
