import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation, BankSelectRow } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class OnBoardingBankSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 5,
    };
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingHorizontal: 20, paddingTop: 40, flexDirection: 'column' }}>
            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}>
              Receber pagamentos
            </Text>
            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { fontSize: 16, alignSelf: 'center', textAlign: 'center' }]}>
              Escolha o seu banco
            </Text>
          </Row>
          <Row size={7} >
            <ScrollView>
              <BankSelectRow
                onPress={() => Actions.onBoardingAccountType()}
                bankName={'218 - Banco Bonsucesso S.A.'}
              />
              <BankSelectRow
                onPress={() => Actions.onBoardingAccountType()}
                bankName={'001 - Banco do Brasil'}
              />
              <BankSelectRow
                onPress={() => Actions.onBoardingAccountType()}
                bankName={'033 - Banco Santander'}
              />
              <BankSelectRow
                onPress={() => Actions.onBoardingAccountType()}
                bankName={'104 - Caixa Economica Federal'}
              />
              <BankSelectRow
                onPress={() => Actions.onBoardingAccountType()}
                bankName={'341 - Banco Itaú'}
              />
              <BankSelectRow
                onPress={() => Actions.onBoardingAccountType()}
                bankName={'247 - Banco Bradesco'}
              />
              <BankSelectRow
                onPress={() => Actions.onBoardingAccountType()}
                bankName={'745 - Banco CityBank'}
              />

              <Spacer size={20} />
            </ScrollView>
          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              terms
              nextStep={() => Actions.onBoardingAccountType()}
              prevStep={() => Actions.pop()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default OnBoardingBankSelect;
