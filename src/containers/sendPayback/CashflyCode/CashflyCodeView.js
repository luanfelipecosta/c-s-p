import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Spacer } from '@ui/';

class CashflyCodeView extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'pink', flex: 1 }} >
        <Text> PaybackCashflyCodeView </Text>
        <Spacer size={18} />
        <Button onPress={() => Actions.homePage()} title={'Prosseguir'} />
      </View>
    );
  }
}

export default CashflyCodeView;
