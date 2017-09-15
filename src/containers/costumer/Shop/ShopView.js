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
} from 'react-native';
import { Spacer, Button, PinInput } from '@ui/';
import { Actions } from 'react-native-router-flux';
import { Loading } from '@components/general/Loading';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

import ValueInput from './valueInput';
import ValueConfirmation from './valueConfirmation';


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
    fontWeight: '700',
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
      step: 1,
      value: '',
      cpf: '',
      modalVisible: false,
      isLoading: false,
    };
  }

  componentDidMount = () => {
    // Show status bar on app launch
    StatusBar.setHidden(false, true);
  }


  render = () => {
    switch (this.state.step) {
      case 1:
        return (
          <ValueInput
            text={'Valor da venda'}
            placeholder={'R$ 00,00'}
            type={'money'}
            value={this.state.value}
            nextStep={() => this.setState({ step: this.state.step + 1 })}
            onChange={value => this.setState({ value })}
          />);
      case 2:
        return (
          <ValueConfirmation
            nextStep={() => this.setState({ step: this.state.step + 1 })}
            prevStep={() => this.setState({ step: this.state.step + -1 })}
            value={this.state.value}
            setModalVisible={modalVisible => this.setState({ modalVisible })}
            modalVisible={this.state.modalVisible}
          />);
      case 3:
        return (
          <ValueInput
            placeholder={'123.456.778-90'}
            type={'cpf'}
            value={this.state.value}
            title={'Realizar Venda'}
            text={'Entre com o CPF'}
            nextStep={() => Actions.cashflyCode()}
            onChange={value => this.setState({ value })}
          />);
      case 4:
        return (
          <ValueInput
            title={'AAAAAA'}
            label={'AAAAA:'}
            nextStep={() => this.setState({ step: this.state.step + 1 })}
            onChange={value => this.setState({ value })}
          />);

      default:
        return (
          <ValueInput

            nextStep={() => this.setState({ step: this.state.step + 1 })}
            onChange={cpf => this.setState({ cpf })}
          />);
    }
  }


}


/* Export Component  */
export default ShopView;

