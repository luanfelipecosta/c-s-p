import React, { Component } from 'react';
import { Text, View, Slider, Alert, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class OnboardingTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 4,
      investmentTime: 40,
      percentage: 4.59,
      investmentHumanTime: '2 anos e meio',
    };
  }
  generateTime(investmentTime) {
    const tax = (4.99 - (investmentTime * 0.01)).toFixed(2);

    this.setState({ investmentTime, percentage: tax });
  }
  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingHorizontal: 20, alignItems: 'center', paddingTop: 40, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}>
              Defina suas taxas e prazos
            </Text>

            <Spacer size={40} />
            <Slider
              minimumValue={2}
              maximumValue={180}
              style={{ width: 300 }}
              minimumTrackTintColor={'#41ff89'}
              maximumTrackTintColor={'#41ff89'}
              thumbTintColor={'#fff'}
              step={1}
              value={this.state.investmentTime}
              onValueChange={investmentTime => this.generateTime(investmentTime)}
              onSlidingComplete={() => { }}
            />
            <Spacer size={10} />

            <Text style={{ color: '#fff', fontSize: 14 }}> {this.state.investmentTime} dias, taxa de {this.state.percentage}% </Text>


          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              terms
              prevStep={() => Actions.pop()}
              nextStep={() => Actions.onBoardingBankSelect()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default OnboardingTime;
