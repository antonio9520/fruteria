import React from 'react';
import styles from '../Styles';
import {View, Image, TextInput} from 'react-native';
import imguser from '../../../../resources/imgiconform/Register-Icon-Name.png';
import imgpass from '../../../../resources/imgiconform/Register-Icon-Password.png';

const Form = (props) => {
  const {setEmail, setPassword} = props;

  return (
    <View style={styles.container1}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '90%',
          alignSelf: 'center',
          elevation: 10,
          borderRadius: 10,
        }}>
        <View style={styles.passwordContainerTop}>
          <Image source={imguser} style={styles.tamicon} />
          <TextInput
            style={styles.borde}
            placeholder="Email"
            onChange={(e) => setEmail(e.nativeEvent.text)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Image source={imgpass} style={styles.tamicon1} />
          <TextInput
            secureTextEntry={true}
            style={styles.borde}
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.nativeEvent.text)}
          />
        </View>
      </View>
    </View>
  );
};

export default Form;
