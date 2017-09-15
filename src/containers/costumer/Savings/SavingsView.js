import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import PresentationView from '@components/general/PresentationView';
// components 
import SafeNameField from './safeNameField';
import SafeDescriptionField from './safeDescriptionField';
import SafeTypeField from './safeTypeField';
import NewSafePresentation from './newSafePresentation.js';

// our styles
import { AppColors, AppSizes } from '@theme';
import { Actions } from 'react-native-router-flux';


import { Spacer } from '@ui/';

const styles = StyleSheet.create({});

class SavingsView extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      selected: '',
    };
  }
  render() {
    switch (this.state.step) {
      case 1:
        return (
          <NewSafePresentation
            nextStep={() => this.setState({ step: this.state.step + 1 })}
          />
        );
      case 2:
        return (
          <SafeNameField
            step={this.state.step}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            nextStep={() => this.setState({ step: this.state.step + 1 })}
          />
        );
      case 3:
        return (
          <SafeDescriptionField
            step={this.state.step}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            nextStep={() => this.setState({ step: this.state.step + 1 })}
          />
        );
      case 4:
        return (
          <SafeTypeField
            step={this.state.step}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            nextStep={() => this.setState({ step: this.state.step + 1 })}
            onSelect={val => this.setState({ selected: val })}
          />
        );
      case 5:
        return (
          <PresentationView
            title={'Cofrinho Criado!'}
            description={'Você ja está guardando dinheiro, você pode alterar as configurações do seu cofrinho no menu superior direito'}
            buttonText={'COMEÇAR'}
            nextStep={() => Actions.safeview()}
          />
        );
      default:
        return <NewSafePresentation nextStep={() => this.setState({ step: this.state.step + 1 })} />;
    }
  }
}

export default SavingsView;
