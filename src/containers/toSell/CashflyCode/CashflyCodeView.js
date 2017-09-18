import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { AppStyles, AppColors, AppSizes } from '@theme/';
import { FormInput, Button, NotificationModal } from '@cashflyUI/';
import { Spacer } from '@ui/';

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 35,
  },
  code: {
    fontSize: 42,
  },
  title: {
    fontWeight: '500',
  },
});

class CashflyCodeView extends Component {

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
        <NotificationModal
          setModalVisible={visible => this.setModalVisible(visible)}
          visible={this.state.modalVisible}
          title={'Pagamento recebido!'}
          content={
            <View>
              <View style={{ flexDirection: 'row', paddingVertical: 15, borderBottomColor: '#aeaeae', borderBottomWidth: 0.5 }}>
                <Text style={{ fontWeight: '700' }}>Cliente: </Text><Text>@usuario </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                <Text style={{ fontWeight: '700' }}>Valor: </Text><Text> R$ 100,00 </Text>
              </View>

              <View style={[AppStyles.row, { justifyContent: 'flex-end' }]}>
                <Button text={'DETALHES'} onPress={() => { this.setModalVisible(false); Actions.wallet(); }} />
                <Button text={'HOME'} onPress={() => { this.setModalVisible(false); Actions.homePage(); }} />
              </View>
            </View>
          }
        />
        <TouchableHighlight onPress={() => this.setModalVisible(true)} >
          <Row style={{ backgroundColor: 'lightyellow', height: 358 }} />
        </TouchableHighlight>
        <Row style={styles.contentContainer} >
          <Text style={styles.title}>  Mostre o codigo para o Comprador: </Text>
          <Spacer size={40} />
          <Text style={styles.code}> {this.applyLetterSpacing(this.state.token, 10)} </Text>
        </Row>
      </Grid>
    );
  }
}

export default CashflyCodeView;
