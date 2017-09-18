import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Spacer } from '@ui/';

class PaybackValueView extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'lightyellow', flex: 1 }} >
        <Text> PaybackValueView </Text>
        <Spacer size={18} />
        <Button onPress={() => Actions.paybackCashflyCode()} title={'Prosseguir'} />
      </View>
    );
  }
}

export default PaybackValueView;
