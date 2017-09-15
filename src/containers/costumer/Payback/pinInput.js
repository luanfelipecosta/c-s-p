
/**
 * Shop Screen
 *    - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *    - Checking if user is logged in, and redirects from there
 *
 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  Image,
  Alert,
  Text,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Keyboard,
  Modal,
  TouchableOpacity,
  Button,
} from 'react-native';
import { Spacer, PinInput } from '@ui/';
import { Actions } from 'react-native-router-flux';
import { Loading } from '@components/general/Loading';
// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
  },
  shopImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  h1: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  onBoardingText: {
    textAlign: 'center',
  },
});


/* Component ==================================================================== */
class ShopView extends Component {
  static componentName = 'ShopView';
  static propTypes = {
    // login: PropTypes.func.isRequired,
    // getRecipes: PropTypes.func.isRequired,
    // getMeals: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      pinCompleted: false,
      pin: 0,
      modalVisible: false,
      text: 'place',
      change: this.props.value,
    };
  }
  componentWillMount() {
    // const change = this.getChangeValue(0, 999);
    // this.setState({ change });
  }
  componentDidMount = () => {
    // Show status bar on app launch
    StatusBar.setHidden(false, true);
  }

  getChangeValue(min, max) {
    let randomValue = ((Math.random() * (max - min)) - min);
    randomValue = randomValue.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    return randomValue;
  }
  loadAndGo = () => {
    Keyboard.dismiss();
    setTimeout(() => { this.setState({ modalVisible: true }); }, 1500);
  }

  renderLoading = () => {
    if (this.state.pinCompleted) {
      return (
        <View>
          <ActivityIndicator
            animating
            size={'large'}
            color={'#000'}
            style={{ alignSelf: 'center' }}
          />

          <Spacer size={15} />

          <Text style={{ alignSelf: 'center' }}> Pareando com o cliente. </Text>

        </View>
      );
    }
    return false;
  };

  render = () => (
    <View style={[{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', paddingHorizontal: 25 }]}>
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
          onPressOut={() => this.loadAndGo()}
        >
          <View style={{ zIndex: 7, marginTop: 22, width: 300, alignSelf: 'center', borderWidth: 1.5, borderColor: '#8b8b8b' }}>
            <View style={{ backgroundColor: 'gray', width: 297, height: 150, alignItems: 'center', paddingBottom: 10, justifyContent: 'flex-end' }} >
              <Image source={require('../../../images/green-ok.png')} style={{ marginBottom: 20, width: 50, height: 50 }} />
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Troco Enviado </Text>
            </View>
            <View style={{ backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 20 }}>
              <View style={{ }}>
                <Text style={{ color: '#797979', fontWeight: '500', marginBottom: 5 }}>Você enviou troco de: </Text>
                <Text style={{ color: '#000', fontSize: 18, fontWeight: '500' }}>{this.state.change} </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
                <Button style={{ marginRight: 20 }} title={'HISTORICO'} onPress={() => this.setState({ modalVisible: false }, Actions.wallet())} color={'rgba(0, 0, 0, 0.86)'} />
                <Button style={{ marginRight: 20 }} title={'HOME'} onPress={() => this.setState({ modalVisible: false }, Actions.homePage())} color={'rgba(0, 0, 0, 0.86)'} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>


      <Spacer size={25} />

      <Spacer size={15} />

      <Text style={[styles.h1]} > Enviar Troco </Text>

      <Spacer size={15} />

      <Text style={styles.onBoardingText}>
        Solicite ao cliente o CashCode para enviar o troco, digite-o abaixo
      </Text>

      <Spacer size={30} />

      <PinInput
        pinLength={6}
        pinItemStyle={{ width: 50, height: 50 }}
        pinItemProps={{ keyboardType: 'numeric' }}
        placeHolder={''}
        onPinCompleted={(pin) => {
          this.setState({
            pinCompleted: true,
            pin,
          }, this.loadAndGo);
        }}
      />

      <Spacer size={50} />

      {this.renderLoading()}
    </View>
  );


}


/* Export Component  */
export default ShopView;
