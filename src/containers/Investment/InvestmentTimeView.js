import React, { Component } from 'react';
import { Text, View, Slider, Alert, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class InvestmentTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 4,
      investmentTime: 2.5,
      investmentHumanTime: '2 anos e meio',
    };
  }
  generateHumanTime(time) {
    const years = Math.floor(time);
    const remaining = (time - Math.floor(time));
    const text = `${years} anos ${remaining > 0 ? 'e meio' : ''}`;

    this.setState({ investmentHumanTime: text });
  }
  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingHorizontal: 20, alignItems: 'center', paddingTop: 40, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}>
              Por quanto tempo você deseja investir
            </Text>

            <Spacer size={40} />
            <Slider
              minimumValue={1}
              maximumValue={10}
              style={{ width: 300 }}
              minimumTrackTintColor={'#41ff89'}
              maximumTrackTintColor={'#41ff89'}
              thumbTintColor={'#fff'}
              step={0.5}
              value={this.state.investmentTime}
              onValueChange={investmentTime => this.generateHumanTime(investmentTime)}
              onSlidingComplete={() => { }}
            />
            <Spacer size={10} />

            <Text style={{ color: '#fff', fontSize: 10 }}> {this.state.investmentHumanTime} </Text>


          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              step={this.state.step}
              maxStep={this.state.maxStep}
              prevStep={() => Actions.pop()}
              nextStep={() => Actions.investmentCharacteristics()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default InvestmentTime;
