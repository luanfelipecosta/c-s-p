import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppStyles, AppColors, AppSizes } from '@theme/';
import { Spacer } from '@ui/';
import { PinInput, Button, NotificationModal } from '@cashflyUI/';

class CashflyCodeView extends Component {
  constructor() {
    super();
    this.state = { modalVisible: false, loading: false };
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  loadAndGo() {
    this.setState({ loading: true }, () => setTimeout(() => this.setState({ loading: false, modalVisible: true }), 1000));
  }

  render() {
    return (
      <View style={{ paddingHorizontal: 15, paddingTop: 105, flexDirection: 'column' }}>
        <NotificationModal
          setModalVisible={visible => this.setModalVisible(visible)}
          visible={this.state.modalVisible}
          title={'Troco Enviado!'}
          imageURL={'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835709/cashfly-enviar-troco_dc4rij.jpg'}
          content={
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 15 }}>
                <Text style={{ color: '#616161' }}>Você enviou troco de: </Text><Text style={{ fontSize: 20 }}> R$ 0,50 </Text>
              </View>
              <Spacer size={10} />
              <View style={[AppStyles.row, { justifyContent: 'flex-end' }]}>
                <Button text={'DETALHES'} onPress={() => { this.setModalVisible(false); Actions.wallet(); }} />
                <Button text={'HOME'} onPress={() => { this.setModalVisible(false); Actions.homePage(); }} />
              </View>
            </View>
          }
        />
        <Text style={[AppStyles.sceneTitle, { textAlign: 'center' }]}>Valor do troco: </Text>
        <Spacer size={5} />
        <Text style={{ textAlign: 'center' }}>
          Solicite ao seu cliente o CashCode para enviar o troco, digite-o abaixo
        </Text>
        <Spacer size={40} />
        <PinInput
          pinLength={6}
          pinItemStyle={{ width: 50, height: 50 }}
          pinItemProps={{ keyboardType: 'numeric' }}
          placeHolder={''}
          onPinCompleted={(pin) => {
            this.setState({
              pinCompleted: true,
              pin,
            }, this.loadAndGo());
          }}
        />
        <Spacer size={150} />
        {!!this.state.loading && <ActivityIndicator size={'large'} color={'gray'} style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }} />}

      </View>
    );
  }
}

export default CashflyCodeView;
