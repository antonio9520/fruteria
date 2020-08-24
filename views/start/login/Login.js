import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Image,
} from 'react-native';
import styles from './Styles';
import backappme from '../../../resources/AppMe-bg-white.png';
import separador from '../../../resources/imgiconform/Icono-Separador.png';
import logomini from '../../../resources/Logotype-AppMe-Original-App.png';
import imgfb from '../../../resources/imgrss/Social-Network-Icon-Facebook.png';
import imgins from '../../../resources/imgrss/Social-Network-Icon-Instagram.png';
import imgGoo from '../../../resources/imgrss/Social-Network-Icon-Google.png';
import firebase from '../../../firebase/Firebase';
import Form from './form/Form';

const Login = (props) => {
  const {navigation} = props;
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const LoginF = () => {
    if (!Email || !Password) {
      console.log('Los campos no deben estar Vacios');
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(Email, Password)
        .then(() => {
          navigation.navigate('homepru');
        })
        .catch(() => {
          console.log('Error al ingresar intente nuevemente');
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backappme} style={styles.image}>
        <View style={styles.contLogo}>
          <View style={styles.subContLogo}>
            <Image source={logomini} style={styles.mgb} />
          </View>
          <View>
            <Text style={styles.txtTitulo}>Bienvenido</Text>
            <Text style={styles.txtstit}>
              Llena con tus datos y comienza a comprar
            </Text>
          </View>
        </View>

        <View style={styles.contForm}>
          <Form setEmail={setEmail} setPassword={setPassword} />
          <View style={styles.btnIngresar}>
            <TouchableHighlight
              style={styles.btnSeguir}
              underlayColor="transparent"
              onPress={LoginF}>
              <Text style={styles.textbutton}>Ingresar</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Image source={separador} style={styles.tamsep} />
          </View>
        </View>

        <View style={styles.contEnlaces}>
          <View>
            <Text style={styles.txtstit2}>Accede con tus redes:</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rowIn}>
              <TouchableHighlight
                style={styles.box}
                underlayColor="transparent"
                onPress={() => navigation.navigate('Face')}>
                <Image source={imgfb} style={styles.mgb1} />
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.box}
                underlayColor="transparent"
                onPress={() => navigation.navigate('Google')}>
                <Image source={imgGoo} style={styles.mgb1} />
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.box}
                underlayColor="transparent"
                onPress={() => navigation.navigate('Insta')}>
                <Image source={imgins} style={styles.mgb1} />
              </TouchableHighlight>
            </View>
          </View>
          <View>
            <TouchableHighlight>
              <Text style={styles.txtstit3}>¿Olvidaste la contraseña?</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Text style={styles.txtstit1}>¿Aun no tienes cuenta?</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.txtTitulo1}> Registrate</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.contfooter}>
            <View style={styles.footer}></View>
          </View>
        </View>

        {/* <Form setEmail={setEmail} setPassword={setPassword} /> */}

        {/* 
          <Text style={styles.txtstit2}>Accede con tus redes:</Text>
          <View style={styles.row}>
            <TouchableHighlight
              style={styles.box}
              underlayColor="transparent"
              onPress={() => navigation.navigate('Face')}>
              <Image source={imgfb} style={styles.mgb1} />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.box}
              underlayColor="transparent"
              onPress={() => navigation.navigate('Google')}>
              <Image source={imgGoo} style={styles.mgb1} />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.box}
              underlayColor="transparent"
              onPress={() => navigation.navigate('Insta')}>
              <Image source={imgins} style={styles.mgb1} />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight>
              <Text style={styles.txtstit3}>¿Olvidaste la contraseña?</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.container}>
            <Text style={styles.txtstit1}>¿Aun no tienes cuenta?</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.txtTitulo1}> Registrate</Text>
            </TouchableHighlight>
          </View>
        </View> */}
      </ImageBackground>
    </View>
  );
};

export default Login;
