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
const WalletCard = ({ avatarURI,
                      title,
                      transactionType,
                      name,
                      value,
                      date,
                      timeAgo }) => (
  <View style={{ backgroundColor: 'white', flexDirection: 'row', paddingVertical: 10, paddingRight: 10 }}>

    <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
      <Avatar
        medium
        rounded
        onPress={() => {}}
        title={title}
        activeOpacity={0.7}
      />
    </View>

    <View style={{ flex: 4 }} >
      <Text style={{ fontWeight: '500' }}>{transactionType} </Text>
      <Text style={{ color: 'gray', marginTop: 3 }}>{name} </Text>
      <Text style={{ fontSize: 16, marginVertical: 7 }}>R$ {value} </Text>
    </View>

    <View style={{ flex: 2, alignItems: 'flex-end' }} >
      <Text>{date} </Text>
      <Text style={{ color: 'gray', position: 'absolute', bottom: 5 }}> {timeAgo} </Text>
    </View>
  </View>

);

WalletCard.componentName = 'WalletCard';
export default WalletCard;
