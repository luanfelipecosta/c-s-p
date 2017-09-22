import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class SellValueView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit(val = 'R$ 0,00') {
    val = val.substr(2).replace('.', '').replace(',', '.');
    this.props.startSell(val);
    Actions.sellValueConfirmation();
  }


  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingLeft: 15, paddingTop: 40, flexDirection: 'column' }}>

            <Text style={AppStyles.semiBoldText}> Valor da venda </Text>

            <Spacer size={70} />
            <FormInput
              type={'money'}
              theme={'light'}
              label={'Valor da venda:'}
              placeholder={'R$ 0,00'}
              value={this.state.sellValue}
              onChange={sellValue => this.setState({ sellValue })}
            />

          </Row>
          <Row style={AppStyles.fowardButtonContainer}>
            <TouchableHighlight style={AppStyles.fowardButton} onPress={() => this.handleSubmit(this.state.sellValue)} >
              <Text style={{ fontWeight: '500' }}> PROSSEGUIR </Text>
            </TouchableHighlight>
          </Row>
          <KeyboardSpacer />
        </Grid>
      </View>
    );
  }
}

export default SellValueView;
