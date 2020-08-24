import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  ImageBackground,
} from 'react-native';
import logomini from '../../../resources/Logotype-AppMe-Original-App.png';
import logoprincipal from '../../../resources/Step1-Graphics.png';
import backappme from '../../../resources/AppMe-bg-white1.png';

export default function Step2(props) {
  const {navigation} = props;
  const [LogoAnime] = useState(new Animated.Value(0));
  const [IconAn] = useState(new Animated.Value(0));
  const [TextAn] = useState(new Animated.Value(0));
  const [tito] = useState(new Animated.Value(0));

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
      Animated.spring(IconAn, {
        toValue: 1,
        tension: 4,
        friction: 5,
        duration: 3000,
      }).start(),
      Animated.timing(IconAn, {
        toValue: 1,
        duration: 1000,
        delay: 700,
      }),
      Animated.spring(TextAn, {
        toValue: 1,
        tension: 4,
        friction: 9,
        duration: 3000,
      }).start(),
      Animated.timing(TextAn, {
        toValue: 1,
        duration: 800,
        delay: 900,
      }),
      Animated.spring(TextAn, {
        toValue: 1,
        tension: 4,
        friction: 9,
        duration: 3000,
      }).start(),
      Animated.timing(TextAn, {
        toValue: 1,
        duration: 800,
        delay: 900,
      }),
      Animated.spring(tito, {
        toValue: 1,
        tension: 5,
        friction: 5,
        duration: 3000,
      }).start(),
      Animated.timing(tito, {
        toValue: 1,
        duration: 800,
        delay: 300,
      }).start(() => {
        setTimeout(
          () => {
            navigation.navigate('Step3');
          },
          3000,
          this,
        );
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
          <Image source={logomini} style={styles.mgb} />
        </Animated.View>
        <View style={styles.center}>
          <Animated.View
            style={{
              opacity: IconAn,
              top: IconAn.interpolate({
                inputRange: [0, 2],
                outputRange: [20, 0],
              }),
            }}>
            <Image style={styles.tam1} source={logoprincipal} />
          </Animated.View>
        </View>
        <Animated.View
          style={{
            opacity: TextAn,
            top: TextAn.interpolate({
              inputRange: [0, 2],
              outputRange: [10, 0],
            }),
          }}>
          <View style={styles.center1}>
            <Text style={styles.texbie1}>Compra, paga y solicita</Text>
            <Text style={styles.texbie1}>delivery de tus productos</Text>
            <Text style={styles.texbie1}>favoritos fácilmente, las veces</Text>
            <Text style={styles.texbie1}>que tú quieras.</Text>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tam1: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: -10,
    marginBottom: 300,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mgb: {
    marginTop: 150,
    marginBottom: 0,
  },
  texbie: {
    color: '#0983FC',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 0,
  },
  texbie1: {
    textAlign: 'center',
    color: '#707070',
    fontSize: 20,
    opacity: 1,
  },
  center: {
    alignItems: 'center',
    marginTop: 50,
  },
  center1: {
    alignItems: 'center',
    marginTop: -280,
  },
  btnSeguir: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    width: 250,
    marginTop: 40,
  },
  textbutton: {
    fontWeight: 'bold',
    color: '#0072EB',
    fontSize: 16,
  },
});
