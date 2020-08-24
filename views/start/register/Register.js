import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import backappme from '../../../resources/AppMe-bg-white.png';
import imguser from '../../../resources/imgiconform/Register-Icon-Name.png';
import imgpass from '../../../resources/imgiconform/Register-Icon-Password.png';
import imgemail from '../../../resources/imgiconform/Register-Icon-Email.png';
import imgpho from '../../../resources/imgiconform/Register-Icon-Phone.png';
import imgub1 from '../../../resources/imgiconform/Register-Icon-Address.png';
import imgub2 from '../../../resources/imgiconform/Register-Icon-Address-Confirm.png';
import styles from './Style';
import {validateEmail} from '../../../utils';
import firebase2 from '../../../firebase/Firebase';
import * as firebase from 'firebase';
import firebase1 from 'firebase/app';

firebase1.firestore().settings({experimentalForceLongPolling: true});
const db = firebase1.firestore(firebase2);

export default function Register(props) {
  const {navigation} = props;
  //Variables a utilizar para guardar y recibir informacion
  const [NomCom, setNomCom] = useState('');
  const [Rut, setRut] = useState('');
  const [Phone, setPhone] = useState('');
  const [Ubicacion, setUbicacion] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [RePassword, setRePassword] = useState('');
  console.log(NomCom, Rut, Phone, Ubicacion, Email, Password, RePassword);

  const adduserinfo = async () => {
    if (
      !NomCom ||
      !Rut ||
      !Phone ||
      !Ubicacion ||
      !Email ||
      !Password ||
      !RePassword
    ) {
      console.log('Todos los datos son ubligatorios');
    } else {
      if (!validateEmail(Email)) {
        console.log('El Formato de Email esta mal intente nuevamente');
      } else {
        if (Password !== RePassword) {
          console.log('Las Contraseñas no son iguales porfavor confirme');
        } else {
          await firebase.auth().createUserWithEmailAndPassword(Email, Password);

          db.collection('userInfo')
            .add({
              NombreC: NomCom,
              Rut: Rut,
              Phone: Phone,
              Ubicacion: Ubicacion,
            })
            .then(() => {
              navigation.navigate('Validacion');
            })
            .catch(() => {
              console.log('Error al ingresar usuario');
            });
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backappme} style={styles.image}>
        <FormRegistro
          setNomCom={setNomCom}
          setRut={setRut}
          setPhone={setPhone}
          setUbicacion={setUbicacion}
          setEmail={setEmail}
          setPassword={setPassword}
          setRePassword={setRePassword}
        />
        <View style={styles.center2}>
          <TouchableHighlight
            style={styles.btnSeguir}
            underlayColor="#F3F306"
            onPress={adduserinfo}>
            <Text style={styles.textbutton}>Continuar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

function FormRegistro(props) {
  const {
    setNomCom,
    setPhone,
    setRut,
    setUbicacion,
    setEmail,
    setPassword,
    setRePassword,
  } = props;
  return (
    <View>
      <View style={styles.justifyleft}>
        <Text style={styles.titulo}>Regístrate y obtén</Text>
        <Text style={styles.titulo1}>Más beneficios</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.passwordContainer}>
          <Image source={imguser} style={styles.tamicon} />
          <TextInput
            style={styles.borde}
            placeholder="Nombre completo"
            onChangeText={(NomCom) => setNomCom({NomCom})} // Aqui recibes la informacion del input
          />
        </View>
        <View style={styles.passwordContainer}>
          <Image source={imguser} style={styles.tamicon} />
          <TextInput
            style={styles.borde}
            placeholder="Rut"
            onChangeText={(Rut) => setRut({Rut})}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Image source={imgemail} style={styles.tamicon} />
          <TextInput
            style={styles.borde}
            placeholder="Correo"
            onChange={(e) => setEmail(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Image source={imgpho} style={styles.tamicon} />
          <TextInput
            style={styles.borde}
            placeholder="Telefono"
            onChangeText={(Phone) => setPhone({Phone})}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.passwordContainer1}>
          <Image source={imgpass} style={styles.tamicon1} />
          <TextInput
            secureTextEntry={true}
            style={styles.borde}
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.passwordContainer1}>
          <Image source={imgpass} style={styles.tamicon1} />
          <TextInput
            secureTextEntry={true}
            style={styles.borde}
            placeholder="Confirmar Contraseña"
            onChange={(e) => setRePassword(e.nativeEvent.text)}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.passwordContainer1}>
          <Image source={imgub1} style={styles.tamicon1} />
          <TextInput
            style={styles.borde}
            placeholder="Ingresa una nueva ubicacion"
            onChangeText={(Ubicacion) => setUbicacion({Ubicacion})}
          />
        </View>
        <View style={styles.passwordContainer1}>
          <Image source={imgub2} style={styles.tamicon1} />
          <TextInput style={styles.borde} placeholder="Ubicacion Actual" />
        </View>
      </View>
    </View>
  );
}
