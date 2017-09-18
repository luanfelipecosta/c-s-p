import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, ActivityIndicator, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class SellCostumerCPFView extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  loadAndGo() {
    this.setState({ loading: true }, () => setTimeout(() => Actions.sellCashflyCode(), 1000));
  }

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingLeft: 15, paddingTop: 40, flexDirection: 'column' }}>

            <Text style={AppStyles.semiBoldText}> CPF do cliente: </Text>

            <Spacer size={70} />
            <FormInput
              type={'cpf'}
              theme={'light'}
              label={'CPF do cliente:'}
              placeholder={'123.456.789-00'}
              value={this.state.sellValue}
              onChange={() => { }}
            />

            {!!this.state.loading && <ActivityIndicator size={'large'} color={'gray'} style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }} />}

          </Row>
          <Row style={AppStyles.fowardButtonContainer}>
            <TouchableHighlight style={AppStyles.fowardButton} onPress={() => this.loadAndGo()} >
              <Text style={{ fontWeight: '500' }}> PROSSEGUIR </Text>
            </TouchableHighlight>
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default SellCostumerCPFView;
