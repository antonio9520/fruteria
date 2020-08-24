import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, Image, ImageBackground} from 'react-native';
import logo from '../../resources/Logotype-AppMe-Original-App.png';
import backappme from '../../resources/AppMe-bg-white1.png';

export default function SplashHome(props) {
  const {navigation} = props;
  const [LogoAnime] = useState(new Animated.Value(0));
  const [LogoText] = useState(new Animated.Value(0));

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
      }).start(() => {
        setTimeout(
          () => {
            navigation.navigate('TabNav');
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
