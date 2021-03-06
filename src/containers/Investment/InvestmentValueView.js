import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class InvestmentValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 3,
    };
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingHorizontal: 15, paddingTop: 40, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}>
              Qual valor você tem disponível para investir?
            </Text>

            <Spacer size={40} />
            <FormInput
              type={'money'}
              theme={'dark'}
              label={'Quero Investir R$:'}
              placeholder={'R$ 0,00'}
              value={this.state.sellValue}
              onChange={sellValue => this.setState({ sellValue })}
            />

          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              step={this.state.step}
              maxStep={this.state.maxStep}
              prevStep={() => Actions.pop()}
              nextStep={() => Actions.investmentTime()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default InvestmentValue;
