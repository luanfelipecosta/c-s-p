import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const WalletPlaceholder = () => (
  <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 50 }} >

    <Icon size={100} color={'#a7a7a7'} name={'coin'} type={'material-community'} />

    <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 16, fontWeight: '500', color: '#A7A7A7' }}> Não há nada para mostrar ainda, começe a sua carteira Cashfly </Text>
  </View>
);

export default WalletPlaceholder;
