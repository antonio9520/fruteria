import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, Image, ImageBackground} from 'react-native';
import logo from '../../../resources/Logotype-AppMe-Original-App.png';
import backappme from '../../../resources/AppMe-bg-white1.png';

export default function SplashStart(props) {
  const {navigation} = props;
  const [LogoAnime] = useState(new Animated.Value(0));
  const [LogoText] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 1000,
      }).start(),
      Animated.timing(LogoText, {
        toValue: 1,
        duration: 1200,
      }).start(() => {
        setTimeout(
          () => {
            navigation.navigate('Step1');
          },
          500,
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
              outputRange: [80, 0],
            }),
          }}>
          <Image styles={styles.tam} source={logo} />
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
  tam: {
    height: 20,
    width: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
