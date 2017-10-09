import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image, Alert } from 'react-native';
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
    paddingBottom: 35,
    justifyContent: 'center',
  },
  code: {
    fontSize: 42,
  },
  title: {
    fontWeight: '500',
  },
});

class CashflyCodeView extends Component {

  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
    this.applyLetterSpacing = this.applyLetterSpacing.bind(this);
  }

  componentWillMount() {
    let token = this.getToken(100000, 199999);
    token = Number(token);
    this.props.saveCashflyCode(token);
  }

  getToken(min, max) {
    const randomToken = (Math.floor((Math.random() * (max - min)) + min)).toString();
    return randomToken;
  }

  applyLetterSpacing(string = '000000', count = 2) {
    const t = string.toString();
    return t.split('').join('\u200A'.repeat(count));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sellValue && nextProps.cashflyCode) {
      this.props.publishSell(
        { sellValue: nextProps.sellValue, cashflyCode: nextProps.cashflyCode, status: 'WAITING_PAYMENT' },
      );
    } else {
      console.log('missing props');
      console.log(this.props);
    }
  }
  componentDidUpdate() {
    this.props.getSellStatus(this.props.cashflyCode);
  }
  render() {
    return (
      <Grid>
        <NotificationModal
          setModalVisible={() => this.props.closeModal()}
          visible={this.props.paymentModal || false}
          title={'Pagamento recebido!'}
          imageURL={'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835708/cashfly-pagamento-recebido_gdaufx.jpg'}
          content={
            <View>
              <View style={{ flexDirection: 'row', paddingVertical: 15, borderBottomColor: '#aeaeae', borderBottomWidth: 0.5 }}>
                <Text style={{ fontWeight: '700' }}>Cliente: </Text><Text>@usuario </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                <Text style={{ fontWeight: '700' }}>Valor: </Text><Text> R$ {this.props.sellValue} </Text>
              </View>

              <View style={[AppStyles.row, { justifyContent: 'flex-end' }]}>
                <Button text={'DETALHES'} onPress={() => { this.props.closeModal(); Actions.wallet(); }} />
                <Button text={'HOME'} onPress={() => { this.props.closeModal(); Actions.homePage(); }} />
              </View>
            </View>
          }
        />
        <TouchableHighlight onPress={() => true} >
          <Image source={{ uri: 'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835709/cashfly-cashcode-ilust_xxbkuk.jpg' }} style={{ height: 358 }} />
        </TouchableHighlight>
        <Row style={styles.contentContainer} >
          <Text style={styles.title}> {this.props.cashflyCode} Mostre o codigo para o Comprador: </Text>
          <Spacer size={40} />
          <Text style={styles.code}> {this.applyLetterSpacing(this.props.cashflyCode, 10)} </Text>
        </Row>
      </Grid>
    );
  }
}

export default CashflyCodeView;
