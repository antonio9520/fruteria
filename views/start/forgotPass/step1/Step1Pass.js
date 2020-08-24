import React from 'react';
import {View, Text, ImageBackground, TouchableHighlight} from 'react-native';
import backappme from '../../../../resources/AppMe-bg-blue2.png';
import styles from './Style';
import CircleCheckBox from 'react-native-circle-checkbox';

export default function Step1Pass(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={backappme} style={styles.image}>
        <View style={styles.margintopcheck1}>
          <Text style={styles.titulo}>Ingrese otro</Text>
          <Text style={styles.titulo1}>Método de envío</Text>
        </View>

        <View style={styles.margintopcheck}>
          <View style={styles.row2}>
            <CircleCheckBox
              checked={false}
              onToggle={(checked) => console.log('My state is: ', checked)}
              filterColor="#96C4F9"
              innerColor="black"
              outerColor="transparent"
              styleCheckboxContainer={styles.checkbox}
            />

            <TouchableHighlight>
              <Text style={styles.textoree1}> SMS teléfono </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row2}>
            <CircleCheckBox
              checked={false}
              onToggle={(checked) => console.log('My state is: ', checked)}
              filterColor="#96C4F9"
              innerColor="black"
              outerColor="transparent"
              styleCheckboxContainer={styles.checkbox}
            />

            <TouchableHighlight>
              <Text style={styles.textoree1}> Llamada telefonica </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row2}>
            <CircleCheckBox
              checked={true}
              onToggle={(checked) => console.log('My state is: ', checked)}
              filterColor="#FFFFFF"
              innerColor="#1580F7"
              outerColor="transparent"
              innerSize="15"
              styleCheckboxContainer={styles.checkbox}
            />

            <TouchableHighlight>
              <Text style={styles.textoree1}> Correo electronico </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.center2}>
          <TouchableHighlight
            style={styles.btnSeguir}
            underlayColor="#F3F306"
            onPress={() => navigation.navigate('Step2Pass')}>
            <Text style={styles.textbutton}>Enviar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}
