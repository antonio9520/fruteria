import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import logominis from '../../../resources/Logotype-AppMe-Original-App.png';
import logoprincipal from '../../../resources/Step2-Graphics.png';
import backappme from '../../../resources/AppMe-bg-white1.png';

const Step3 = ({navigation}) => {
  const [LogoAnime] = useState(new Animated.Value(0));
  const [logomini] = useState(new Animated.Value(0));
  const [icon] = useState(new Animated.Value(0));
  const [texto] = useState(new Animated.Value(0));
  const [btn] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 4,
        friction: 5,
        duration: 2000,
      }).start(),
      Animated.timing(LogoAnime, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.spring(logomini, {
        toValue: 1,
        tension: 4,
        friction: 5,
        duration: 3000,
      }).start(),
      Animated.timing(logomini, {
        toValue: 1,
        duration: 1000,
      }),
      Animated.spring(icon, {
        toValue: 1,
        tension: 4,
        friction: 5,
        duration: 6000,
      }).start(),
      Animated.timing(icon, {
        toValue: 1,
        duration: 1000,
        delay: 100,
      }),
      Animated.spring(texto, {
        toValue: 1,
        tension: 4,
        friction: 5,
        duration: 1000,
      }).start(),
      Animated.timing(texto, {
        toValue: 1,
        duration: 1000,
        delay: 100,
      }),
      Animated.spring(btn, {
        toValue: 2,
        tension: 5,
        friction: 1,
        duration: 300,
      }).start(),
      Animated.timing(btn, {
        toValue: 2,
        duration: 1000,
        delay: 150,
      }).start(() => {
        setTimeout(() => {}, 500, this);
      }),
    ]);
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={backappme} style={styles.image}>
        <Animated.View
          style={{
            opacity: LogoAnime,
            top: LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [120, 0],
            }),
          }}>
          <Image source={logominis} style={styles.mgb} />
        </Animated.View>
        <Animated.View
          style={{
            opacity: logomini,
            top: logomini.interpolate({
              inputRange: [0, 1],
              outputRange: [120, 0],
            }),
          }}>
          <Image source={logomini} style={styles.mgb} />
        </Animated.View>
        <Animated.View
          style={{
            opacity: icon,
            top: icon.interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0],
            }),
          }}>
          <View style={styles.center}>
            <Image style={styles.tam1} source={logoprincipal} />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            opacity: texto,
            top: texto.interpolate({
              inputRange: [0, 2],
              outputRange: [20, 0],
            }),
          }}>
          <View style={styles.center1}>
            <Text style={styles.textwhite}> Monitorear tus Pedidos</Text>
            <Text style={styles.textwhite}> mientras viene en camino a</Text>
            <Text style={styles.textwhite}> tu casa</Text>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            top: btn.interpolate({
              inputRange: [0, 1],
              outputRange: [380, 190],
            }),
          }}>
          <View style={styles.center2}>
            <TouchableHighlight
              style={styles.btnSeguir}
              underlayColor="transparent"
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textbutton}>Comencemos</Text>
            </TouchableHighlight>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tam1: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: 150,
    marginLeft: 15,
    marginBottom: 320,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mgb: {
    marginTop: 108,
    marginBottom: -125,
  },
  texbie: {
    color: '#0983FC',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 0,
  },
  texbie1: {
    color: '#FFFFFF',
    fontSize: 15,
    opacity: 1,
  },
  center: {
    alignItems: 'center',
    marginTop: 0,
  },
  center1: {
    alignItems: 'center',
    marginTop: -320,
  },
  center2: {
    alignItems: 'center',
    marginTop: -210,
  },
  btnSeguir: {
    backgroundColor: '#49A83F',
    borderRadius: 5,
    padding: 14,
    alignItems: 'center',
    width: 250,
  },
  textbutton: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
    fontSize: 18,
  },
  textwhite: {
    fontSize: 22,
    color: '#707070',
    fontWeight: 'normal',
  },
});

export default Step3;
