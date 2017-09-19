import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { FormInput, StepNavigation } from '@cashflyUI/';
import { AppStyles } from '@theme/';


class InvestmentObjective extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 6,
    };
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingHorizontal: 40, paddingTop: 40, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}>
              Qual seu plano para esse investimento?
            </Text>

            <Spacer size={40} />


            <RadioGroup thickness={2} color={'#fff'}>
              <RadioButton
                value={'item1'}
                highlightColor={'#ccc8b9'}
                style={{ paddingVertical: 30 }}
              >
                <Text style={{ marginLeft: 35, color: '#fff', fontWeight: '500', fontSize: 16 }}>Rentabilizar meu dinheiro</Text>
              </RadioButton>

              <RadioButton
                value={'item1'}
                highlightColor={'#ccc8b9'}
                style={{ paddingVertical: 30 }}
              >
                <Text style={{ marginLeft: 35, color: '#fff', fontWeight: '500', fontSize: 16 }}>Comprar um Imóvel</Text>
              </RadioButton>

              <RadioButton
                value={'item1'}
                highlightColor={'#ccc8b9'}
                style={{ paddingVertical: 30 }}
              >
                <Text style={{ marginLeft: 35, color: '#fff', fontWeight: '500', fontSize: 16 }}>Garantir minha aposentadoria</Text>
              </RadioButton>
            </RadioGroup>


          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              step={this.state.step}
              maxStep={this.state.maxStep}
              prevStep={() => Actions.pop()}
              nextStep={() => Actions.investmentTaxes()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default InvestmentObjective;
