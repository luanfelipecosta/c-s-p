import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingRight: 10,
  },
});
const BalanceCard = ({ title, value, month }) => (
  <View style={{ backgroundColor: 'lightgray', flexDirection: 'column', marginBottom: 15 }}>
    <View style={{ backgroundColor: 'darkgray', height: 150 }} />

    <View style={{ backgroundColor: 'white', flexDirection: 'row', height: 100, paddingTop: 25, paddingHorizontal: 20 }} >

      <View style={{ flex: 1 }}>
        <Text style={{fontWeight: '500' }}>{title}: </Text>
        <Text style={{ marginTop: 5, fontSize: 18, fontWeight: '700', fontFamily: 'HelveticaNeue' }}>R$ {value}</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={{ fontWeight: '500' }}>{month}</Text>
      </View>
    </View>
  </View>

);

BalanceCard.componentName = 'BalanceCard';
export default BalanceCard;
