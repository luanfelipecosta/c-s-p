import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class PaybackValueView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingLeft: 15, paddingTop: 40, flexDirection: 'column' }}>
            <Spacer size={70} />
            <Text style={[AppStyles.sceneTitle, { textAlign: 'center' }]}>Valor do troco: </Text>
            <Spacer size={50} />
            <FormInput
              type={'money'}
              theme={'light'}
              label={'Valor do troco:'}
              placeholder={'R$ 0,00'}
              value={this.state.sellValue}
              onChange={sellValue => this.setState({ sellValue })}
            />

          </Row>
          <Row style={{ height: 56, backgroundColor: '#d8d8d8', paddingHorizontal: 15, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }} >
            <Text style={{}}>Saldo de troco disponível: </Text>
            <Text style={{}}>R$ 100,00 </Text>
          </Row>
          <Row style={AppStyles.fowardButtonContainer}>
            <TouchableHighlight style={AppStyles.fowardButton} onPress={() => Actions.paybackCashflyCode({ sellValue: this.state.sellValue })} >
              <Text style={{ fontWeight: '500' }}> PROSSEGUIR </Text>
            </TouchableHighlight>
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default PaybackValueView;
