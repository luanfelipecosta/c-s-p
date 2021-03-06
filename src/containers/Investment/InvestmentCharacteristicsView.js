import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation, InvestmentTile } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class InvestmentCharacteristics extends Component {
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
              Qual a caracteristica do seu investimento?
            </Text>
          </Row>
          <Row size={7} style={{ paddingHorizontal: 20 }}>
            <ScrollView>
              <InvestmentTile
                onPress={() => Actions.investmentSimulation({ title: 'Investimento conservador' })}
                title={'Investimento'}
                bigTitle={'conservador'}
                imageURL={'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835707/cashfly-investimento-conservador-ilust_klocln.jpg'}
                description={'Retornos consistentes privilegiando a segurança'}
              />
              <InvestmentTile
                onPress={() => Actions.investmentSimulation({ title: 'Investimento moderado' })}
                title={'Investimento'}
                bigTitle={'moderado'}
                imageURL={'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835709/cashfly-investimento-arrojado_ae9swd.jpg'}
                description={'Equilibrio entre segurança e rentabilidade'}
              />
              <InvestmentTile
                onPress={() => Actions.investmentSimulation({ title: 'Investimento arrojado' })}
                title={'Investimento'}
                bigTitle={'arrojado'}
                imageURL={'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835707/cashfly-investimento-moderado-ilust_rtypmk.jpg'}
                description={'Privilegia rentabilidade, tem maior possibilidade de variações'}
              />
              <Spacer size={20} />
            </ScrollView>
          </Row>
          <Row style={{ height: 64 }}>
            <StepNavigation
              step={this.state.step}
              maxStep={this.state.maxStep}
              disabledNext
              prevStep={() => Actions.pop()}
            />
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default InvestmentCharacteristics;
