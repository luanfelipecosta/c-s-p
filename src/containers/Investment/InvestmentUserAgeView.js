import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class InvestmentUserAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 2,
    };
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingHorizontal: 15, paddingTop: 40, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}>
              {`Legal ${this.props.nome || 'John Doe'}, nos fale qual sua idade`}
            </Text>

            <Spacer size={40} />
            <FormInput
              type={'only-numbers'}
              theme={'dark'}
              label={'Sua idade:'}
              placeholder={'Quantos anos você tem?'}
              value={this.state.sellValue}
              onChange={sellValue => this.setState({ sellValue })}
            />

          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              step={this.state.step}
              maxStep={this.state.maxStep}
              prevStep={() => Actions.pop()}
              nextStep={() => Actions.investmentValue()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default InvestmentUserAge;
