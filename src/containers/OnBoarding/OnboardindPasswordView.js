import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, TextInput } from 'react-native';
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
      input: '',
    };
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingHorizontal: 15, paddingTop: 90, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}> Agora crie uma senha</Text>

            <Spacer size={40} />
            <View style={{ paddingHorizontal: 24 }}>
              <Text
                style={{
                  fontSize: 10,
                  marginBottom: 3,
                  color: '#5d5875',
                }}
              >
                Crie sua senha
              </Text>
              <View style={{ borderBottomWidth: 1, borderBottomColor: '#5d5875' }}>
                <TextInput
                  style={{ height: 25 }}
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                  underlineColorAndroid={'transparent'}
                  secureTextEntry
                  color={'#fff'}
                />
              </View>
            </View>

          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              terms
              prevStep={() => Actions.pop()}
              nextStep={() => Actions.onBoardingPasswordConfirmation()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default OnBoardingHomeView;
