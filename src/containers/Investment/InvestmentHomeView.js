import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class InvestmentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 1,
    };
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingHorizontal: 15, paddingTop: 40, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}> Oi, como você gostaria de ser chamado? </Text>

            <Spacer size={40} />
            <FormInput
              type={'custom'}
              label={'Digite seu nome:'}
              placeholder={'Como podemos te chamar?'}
              value={this.state.sellValue}
              theme={'dark'}
              onChange={sellValue => this.setState({ sellValue })}
            />

          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              step={this.state.step}
              maxStep={this.state.maxStep}
              firstStep
              nextStep={() => Actions.investmentUserAge({ nome: this.state.sellValue })}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default InvestmentHome;
