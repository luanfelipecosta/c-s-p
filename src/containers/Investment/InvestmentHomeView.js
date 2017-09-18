import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
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

  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>
          <Row style={{ paddingLeft: 15, paddingTop: 40, flexDirection: 'column' }}>

            <Text style={[AppStyles.sceneTitle, AppStyles.lightText, { alignSelf: 'center', textAlign: 'center' }]}> Oi, como você gostaria de ser chamado? </Text>

            <Spacer size={40} />
            <FormInput
              type={'custom'}
              theme={'light'}
              label={'Digite seu nome:'}
              placeholder={'Como podemos te chamar?'}
              value={this.state.sellValue}
              onChange={sellValue => this.setState({ sellValue })}
            />

          </Row>
          <Row style={AppStyles.fowardButtonContainer}>
            <TouchableHighlight style={AppStyles.fowardButton} onPress={() => Actions.sellValueConfirmation({ sellValue: this.state.sellValue })} >
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
