import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class OnBoardingHomeView extends Component {
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
          <Row style={{ paddingHorizontal: 15, paddingTop: 45, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}> Qual seu CNPJ</Text>

            <Spacer size={40} />
            <FormInput
              type={'cnpj'}
              label={'Digite seu CNPJ'}
              placeholder={'Número do CNPJ'}
              value={this.state.sellValue}
              theme={'dark'}
              onChange={sellValue => this.setState({ sellValue })}
            />
            <Spacer size={50} />

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}> Qual sua razão social</Text>

            <Spacer size={40} />
            <FormInput
              type={'text'}
              label={'Digite sua razão social'}
              placeholder={'Nome da razão social'}
              value={this.state.social}
              theme={'dark'}
              onChange={social => this.setState({ social })}
            />


          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              firstStep
              terms
              nextStep={() => Actions.onBoardingNickname()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default OnBoardingHomeView;
