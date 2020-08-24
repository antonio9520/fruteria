import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    backgroundColor: 'transparent',
    height: 48,
  },
  passwordContainer1: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    backgroundColor: 'transparent',
    height: 55,
  },
  scrollview: {
    backgroundColor: 'transparent',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 55,
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 50,
  },
  box: {
    flex: 1,
    width: 10,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  container1: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    marginVertical: 5,
    borderWidth: 0.5,
    width: 350,
    height: 190,
    marginLeft: 0,
    borderRadius: 5,
  },
  container2: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    marginVertical: 5,
    borderWidth: 0.5,
    width: 350,
    height: 110,
    borderRadius: 5,
    marginLeft: 0,
  },
  borde: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSeguir: {
    backgroundColor: '#49A83F',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    width: 350,
    marginTop: 5,
  },
  textbutton: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    fontSize: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#49A83F',
    marginTop: 10,
  },
  titulo1: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#49A83F',
  },
  mgb: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  tamicon: {
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  tamicon1: {
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 14,
  },
  justifyleft: {
    marginRight: 100,
  },
  center: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default styles;
