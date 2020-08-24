import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  ImageBackground,
} from 'react-native';
import logomini from '../../../resources/Logotype-AppMe-Original-App.png';
import logoprincipal from '../../../resources/Welcome-Graphics.png';
import backappme from '../../../resources/AppMe-bg-white1.png';

export default function Step1(props) {
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
        duration: 1000,
      }).start(),
      Animated.timing(TextAn, {
        toValue: 1,
        duration: 1000,
        delay: 900,
      }),
      Animated.spring(tito, {
        toValue: 1,
        tension: 5,
        friction: 5,
        duration: 2000,
      }).start(),
      Animated.timing(tito, {
        toValue: 1,
        duration: 1000,
        delay: 1000,
      }).start(() => {
        setTimeout(
          () => {
            navigation.navigate('Step2');
          },
          1000,
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
            <Text style={styles.texbie1}>
              Fruteria Bilbao ahora tiene su propia app
            </Text>
            <Text style={styles.texbie1}>
              estamos seguros que sera tu favorita
            </Text>
            <Text style={styles.texbie1}>Facil de usar y muy comoda</Text>
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
    marginTop: 20,
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
    color: '#787879',
    fontSize: 20,
    opacity: 1,
  },
  center: {
    alignItems: 'center',
    marginTop: 50,
  },
  center1: {
    alignItems: 'center',
    marginTop: -250,
  },
});
