import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rowbtncarrito: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCarrito: {
    width: '90%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    height: 60,
    borderRadius: 2,
    elevation: 1,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
    marginBottom: 5,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 9,
  },
  txttotalbtncarrito: {
    fontSize: 18,
    marginLeft: 25,
    fontWeight: '600',
  },
  btncarrito: {
    marginLeft: 80,
    backgroundColor: '#49A83F',
    height: '97%',
    width: 105,
    alignItems: 'center',
    textAlign: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    right: 0,
    top: 2,
  },
  row2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
  txtbtncarro: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  ticonnot12: {
    width: 35,
    height: 35,
  },
});

export default styles;
