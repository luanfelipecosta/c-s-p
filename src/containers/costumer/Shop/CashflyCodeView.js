import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ScrollView, ActivityIndicator, TouchableOpacity, Dimensions, View, Button, Alert, Text, StyleSheet, Image, TouchableHighlight, Modal } from 'react-native';

// Consts and Libs
import { AppStyles, AppSizes, AppFonts } from '@theme/';

import { Actions } from 'react-native-router-flux';

// Components
import { Spacer } from '@ui/';


// Styles
const styles = StyleSheet.create({
  centeredText: {
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 40,
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
  },
  placeholder: {
    backgroundColor: 'darkgray',
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...this.centeredText,
    marginTop: 40,
    fontSize: 15,
    fontWeight: '500',

  },
  message: {
    textAlign: 'center',
    marginTop: 10,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  code: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 40,
    fontWeight: '500',
  },
  loading: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontWeight: '500',
    fontSize: 13,
  },
});

// Component
class CashflyCodeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      isLoading: false,
      token: '',
      sell: '',
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this.applyLetterSpacing = this.applyLetterSpacing.bind(this);
  }

  componentWillMount() {
    const token = this.getToken(1000, 1999);
    const sell = this.getSellValue(0, 9999);

    this.setState({ token, sell });
  }

  getToken(min, max) {
    const randomToken = (Math.floor((Math.random() * (max - min)) + min)).toString();
    return randomToken;
  }

  getSellValue(min, max) {
    let randomValue = ((Math.random() * (max - min)) - min);
    randomValue = randomValue.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    return randomValue;
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  applyLetterSpacing(string, count = 2) {
    return string.split('').join('\u200A'.repeat(count));
  }

  completeTransaction() {
    setTimeout(() => { this.setState({ modalVisible: true }); }, 1500);
  }

  renderLoading() {
    if (this.state.isLoading) {
      return (
        <View>
          <Spacer size={20} />
          <ActivityIndicator />
          <Spacer size={12} />
          <Text style={styles.loading} > Aguarde, pareando com vendedor... </Text>
        </View>
      );
    }

  }

  render() {
    return (
      <View style={{ flexDirection: 'column', backgroundColor: '#fff', flexGrow: 1 }} >

        {/* modal */}
        <Modal
          transparent
          animationType="fade"
          presentationStyle={'pageSheet'}
          visible={this.state.modalVisible}
          onRequestClose={() => { }}
        >
          <TouchableOpacity
            style={{ backgroundColor: 'rgba(0,0,0, 0.7)', justifyContent: 'center', flex: 1 }}
            activeOpacity={1}
            onPressOut={() => { this.setState({ modalVisible: false, isLoading: false }); }}
          >
            <View style={{ zIndex: 7, marginTop: 22, width: 300, alignSelf: 'center', borderWidth: 1.5, borderColor: '#8b8b8b' }}>
              <View style={{ backgroundColor: 'gray', width: 297, height: 150, alignItems: 'center', paddingBottom: 10, justifyContent: 'flex-end' }} >
                <Image source={require('../../../images/green-ok.png')} style={{ marginBottom: 20, width: 50, height: 50 }} />
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Pagamento Recebido </Text>
              </View>
              <View style={{ backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                  <Text style={{ color: '#000', fontWeight: '700' }}> Cliente </Text>
                  <Text style={{ color: '#000', fontWeight: '500' }}> @usuario </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                  <Text style={{ color: '#000', fontWeight: '700' }}> Valor </Text>
                  <Text style={{ color: '#000', fontWeight: '500' }}> R$ {this.state.sell} </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
                  <Button style={{ marginRight: 20 }} title={'DETALHES'} onPress={() => { this.setModalVisible(false); Actions.wallet(); }} color={'rgba(0, 0, 0, 0.86)'} />
                  <Button style={{ marginRight: 20 }} title={'HOME'} onPress={() => { this.setModalVisible(false); Actions.homePage(); }} color={'rgba(0, 0, 0, 0.86)'} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>


        {/* view */}
        <View style={styles.container} >

          <Spacer size={40} />

          <TouchableOpacity onPress={() => { this.setState({ isLoading: true }, this.completeTransaction); }} >
            <View style={styles.placeholder} >
              <Text> 500x500 </Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>  CashflyCode </Text>
          <Text style={styles.message}> Mostre esse código ao comprador </Text>

          <Text style={styles.code}> {this.applyLetterSpacing(`${this.state.token}`, 7)} </Text>

          {this.renderLoading()}
        </View>
      </View>
    );
  }
}
// Export Component */
export default CashflyCodeView;
