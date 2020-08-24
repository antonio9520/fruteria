import React from 'react';
import {View, TouchableHighlight, Image, Text} from 'react-native';
import styles from './Style';
import iconatras from '../../../../resources/imghompro/icono-atras.png';
import iconub from '../../../../resources/imghompro/Icon-Direccion.png';
import iconnot from '../../../../resources/imghompro/Icon-Notif-azul.png';
import {Calendar} from 'react-native-calendars';

export default function Agendar(props) {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.botonatras}>
        <Image source={iconatras} style={styles.ticonmenup} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.mgbtmp1}>
        <Image source={iconub} style={styles.ticonnot} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.mgbtmp3}>
        <Image source={iconnot} style={styles.ticonnot} />
      </TouchableHighlight>
      <Text style={styles.txt}>Programar pedido</Text>
      <Text style={styles.txtdia}>Seleccione el dia</Text>

      <Calendario />
      <Pagar />
      <TouchableHighlight
        underlayColor="#FFFFFF"
        onPress={() => navigation.navigate('Resumen')}>
        <View style={styles.cajairapagar}>
          <View style={styles.boxcantidad}>
            <Text style={styles.txtcantidad}>4</Text>
          </View>
          <Text style={styles.txtirpagar}>Ir a Pagar</Text>
          <Text style={styles.txtpagar}>$4.000</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.vaciarcarro}>Vaciar Carro</Text>
    </View>
  );
}

function Calendario(props) {
  return (
    <View style={styles.vcalendario}>
      <Calendar
        // Initially visible month. Default = Date()
        current={'2020-08-10'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2020-08-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2020-08-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => <Arrow />}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        renderHeader={(date) => {
          /*Return JSX*/
        }}
      />
    </View>
  );
}

function Pagar(props) {
  const {navigation} = props;
  return (
    <View style={{marginTop: 228}}>
      <Text style={styles.txtdia}>selecciona la hora</Text>
      <View style={styles.selechora}>
        <Text style={styles.txthora}>08:00 am - 08:30 am</Text>
      </View>
      <View style={styles.vpago}>
        <View style={styles.vcosto}>
          <Text style={styles.txtcosto}>Costo de envio</Text>
          <Text style={styles.txtcosto1}>$ 2.000</Text>
        </View>
        <View style={styles.vpropina}>
          <Text style={styles.txtcosto}>Propina</Text>
          <Text style={styles.txtcosto1}>$ 1.000 </Text>
          <Text style={styles.mas}>+</Text>
        </View>
      </View>
    </View>
  );
}
