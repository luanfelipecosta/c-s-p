import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, Button, NotificationModal } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';


const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 15,
    paddingTop: 40,
    flexDirection: 'column',
  },
  sellValueContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sellValue: {
    fontSize: 56,
    alignSelf: 'center',
  },
  button: { backgroundColor: 'blue', height: 36, paddingBottom: 10, paddingHorizontal: 15, justifyContent: 'flex-end', marginRight: 10 },
});

class ValueConfirmationView extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      CPFByPassed: false,
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  go() {
    if (!this.state.CPFByPassed) this.setModalVisible(true);
    else Actions.sellCashflyCode();
  }
  render() {
    return (
      <View style={AppStyles.container} >
        <Grid>

          <NotificationModal
            setModalVisible={visible => this.setModalVisible(visible)}
            visible={this.state.modalVisible}
            title={'CPF na nota?'}
            imageURL={'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835711/cashfly-cpf-na-nota_pxjjnc.jpg'}
            content={
              <View>
                <Text style={{ color: '#626262' }}>Verifique com seu cliente se CPF na nota é necessário, pressione adicionar </Text>
                <Spacer size={15} />
                <View style={[AppStyles.row, { justifyContent: 'flex-end' }]}>
                  <Button text={'ADICIONAR'} onPress={() => { this.setModalVisible(false); Actions.sellCostumerCPF({ sellValue: this.props.sellValue }); }} />
                  <Button text={'CANCELAR'} onPress={() => this.setState({ CPFByPassed: true, modalVisible: false }, Actions.sellCashflyCode())} />
                </View>
              </View>
            }
          />

          <Row style={styles.mainWrapper}>
            <Text style={AppStyles.semiBoldText}> Valor da venda: </Text>
            <View style={styles.sellValueContainer}>
              <Text style={styles.sellValue}> {this.props.sellValue || 'R$ 0,00'} </Text>
            </View>
          </Row>
          <Row style={{ height: 52, paddingVertical: 10, paddingRight: 15, justifyContent: 'flex-end', borderTopColor: 'lightgray', borderTopWidth: 1 }} >
            <Button text={'EDITAR'} onPress={() => Actions.pop()} />
            <Button text={'CANCELAR'} onPress={() => Actions.homePage()} />

          </Row>
          <Row style={AppStyles.fowardButtonContainer}>
            <TouchableHighlight style={AppStyles.fowardButton} onPress={() => this.go()} >
              <Text style={{ fontWeight: '500' }}> PROSSEGUIR </Text>
            </TouchableHighlight>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default ValueConfirmationView;
