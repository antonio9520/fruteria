import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 3,
  },
  btnubno: {
    position: 'absolute',

    right: 20,
    top: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  conprofe: {
    height: 500,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    marginTop: 40,
  },
  viewinterno: {
    alignItems: 'center',
    marginTop: -185,
    borderRadius: 10,
  },
  txt1: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 25,
    color: '#AAB5C7',
  },
  txttitle: {
    fontWeight: 'bold',
    fontSize: 35,
    marginLeft: 25,
    color: '#1DAFF1',
  },
  txtdescripcion: {
    fontSize: 15,
    width: 300,
    marginLeft: 25,
    color: '#868686',
  },
  mgscv: {
    backgroundColor: 'red',
  },
  box4: {
    width: 100,
    margin: 5,
    marginTop: 10,
    height: 150,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#ECECF5',
    borderRadius: 10,
    elevation: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  ticonnot2: {
    width: 85,
    height: 80,
    marginTop: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  txtpf: {
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 30,
    color: '#595858',
    marginVertical: 5,
    left: 20,
  },
  txtpfs: {
    marginRight: 40,
    fontSize: 13,
    fontWeight: '500',
    color: '#999999',
  },
  stybtn: {
    backgroundColor: '#109DE8',
    alignItems: 'center',
    padding: 12,
    width: 300,
    alignSelf: 'center',
    marginBottom: -55,
    borderRadius: 10,
  },
  txtbtn: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ticonnot3: {
    width: 18,
    height: 18,
    right: -32,
    top: 10,
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 3,
  },
});

export default styles;
