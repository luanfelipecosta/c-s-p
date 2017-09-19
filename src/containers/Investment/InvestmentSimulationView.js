import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation, InvestmentRow } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';
import { Avatar } from 'react-native-elements';

const styles = StyleSheet.create({
  graphWrapper: {
    height: 210,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 15,
    flexDirection: 'column',
  },
  financeStatusWrapper: {
    height: 30,
    flexDirection: 'row',
    backgroundColor: AppColors.brand.primary,
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    alignItems: 'center',
  },
  financeText: {
    color: '#fff',
    fontWeight: '500',
  },
});

class InvestmentSimulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 4,
    };
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{
            height: 210,
            paddingHorizontal: 15,
            paddingTop: 25,
            paddingBottom: 15,
            flexDirection: 'column',
          }}
          >
            <Image style={{ alignSelf: 'center' }} source={require('../../images/graph.png')} />
          </Row>
          <Row style={{
            height: 72,
            flexDirection: 'row',
            backgroundColor: AppColors.brand.primary,
            justifyContent: 'space-between',
            paddingHorizontal: 60,
            alignItems: 'center',
          }}
          >
            <Text style={styles.financeText} >Posição financeira</Text>
            <Text style={styles.financeText} >R$ 20.000,00</Text>
          </Row>

          <Row>
            <ScrollView>
              <InvestmentRow
                color={'blue'}
                title={'Titulo de aplicação'}
                subtitle={'0.0% do total'}
                rightText={'R$ 0.000,00'}
              />
              <InvestmentRow
                color={'red'}
                title={'Titulo de aplicação'}
                subtitle={'0.0% do total'}
                rightText={'R$ 0.000,00'}
              />
              <InvestmentRow
                title={'Titulo de aplicação'}
                subtitle={'0.0% do total'}
                rightText={'R$ 0.000,00'}
              />
              <InvestmentRow
                color={'yellow'}
                title={'Titulo de aplicação'}
                subtitle={'0.0% do total'}
                rightText={'R$ 0.000,00'}
              />
              <InvestmentRow
                color={'blue'}
                title={'Titulo de aplicação'}
                subtitle={'0.0% do total'}
                rightText={'R$ 0.000,00'}
              />
              <InvestmentRow
                color={'green'}
                title={'Titulo de aplicação'}
                subtitle={'0.0% do total'}
                rightText={'R$ 0.000,00'}
              />
              <InvestmentRow
                color={'red'}
                title={'Titulo de aplicação'}
                subtitle={'0.0% do total'}
                rightText={'R$ 0.000,00'}
              />
              <InvestmentRow
                color={'blue'}
                title={'Titulo de aplicação'}
                subtitle={'0.0% do total'}
                rightText={'R$ 0.000,00'}
              />
            </ScrollView>
          </Row>
          <Row style={AppStyles.fowardButtonContainer}>
            <TouchableHighlight style={AppStyles.fowardButton} onPress={() => Actions.investmentObjective()} >
              <Text style={{ fontWeight: '500' }}> PROSSEGUIR </Text>
            </TouchableHighlight>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default InvestmentSimulation;
