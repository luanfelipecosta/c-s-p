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

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}>Complete as informações</Text>

            <Spacer size={40} />
            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { paddingHorizontal: 20, fontSize: 16, alignSelf: 'flex-start' }]}> Número da agência</Text>
            <Spacer size={30} />
                    
            <FormInput
              type={'only-numbers'}
              label={'Número da agência com digito'}
              placeholder={'000 - 0'}
              value={this.state.agency}
              theme={'dark'}
              onChange={agency => this.setState({ agency })}
            />
            <Spacer size={50} />

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { paddingHorizontal: 20, fontSize: 16, alignSelf: 'flex-start' }]}> Número da conta</Text>
            <Spacer size={30} />

            <FormInput
              type={'only-numbers'}
              label={'Número da conta com dígito'}
              placeholder={'000000000 - 0'}
              value={this.state.account}
              theme={'dark'}
              onChange={account => this.setState({ account })}
            />


          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              terms
              prevStep={() => Actions.pop()}
              nextStep={() => Actions.onBoardingPassword()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default OnBoardingHomeView;
