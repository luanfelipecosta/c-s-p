import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { AppStyles, AppColors, AppSizes } from '@theme/';
import { FormInput, NotificationModal } from '@cashflyUI/';
import { Spacer, Button } from '@ui/';

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: AppColors.backgroundDark,
    flexDirection: 'column',
    paddingBottom: 40,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  code: {
    fontSize: 42,
  },
  title: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 24,
  },
});

class OnBoardingAccountCreated extends Component {

  constructor() {
    super();
    this.state = { modalVisible: false };
    this.applyLetterSpacing = this.applyLetterSpacing.bind(this);
  }

  componentWillMount() {
    const token = this.getToken(100000, 199999);
    this.setState({ token });
  }

  getToken(min, max) {
    const randomToken = (Math.floor((Math.random() * (max - min)) + min)).toString();
    return randomToken;
  }

  applyLetterSpacing(string, count = 2) {
    return string.split('').join('\u200A'.repeat(count));
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Grid>
        <Image source={require('../../images/onboarding/conta-criada.jpg')} style={{ width: AppSizes.screen.width, height: 364 }} />
        <Row style={styles.contentContainer} >
          <Text style={styles.title}>Conta criada </Text>
          <Spacer size={10} />
          <Text style={{ color: '#ffff' }}> Sua carteira CashFly está pronta para uso. </Text>
          <Spacer size={40} />
          <View style={{}}>
            <Button
              onPress={Actions.app}
              title={'COMEÇAR'}
              color={'#000'}
              backgroundColor={AppColors.brand.secondary}
            />
          </View>
        </Row>
      </Grid>
    );
  }
}

export default OnBoardingAccountCreated;
