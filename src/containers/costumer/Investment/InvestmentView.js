import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Keyboard, Alert } from 'react-native';
import PresentationView from '@components/general/PresentationView';
// components
import InvestmentTaxes from './investmentTaxes';
import InvestmentType from './investmentType';
import InvestmentTime from './investmentTime';
import OnboardTextField from '@components/general/onboardTextField';
import InvestmentCharacteristics from './investmentCharacteristics';

// our styles
import { AppColors, AppSizes } from '@theme';
import { Actions } from 'react-native-router-flux';


class InvestmentView extends Component {


  constructor() {
    super();

    this.state = {
      step: 1,
      input: '',
      selected: '',
      maxStep: 6,
      data: {
        name: '',
        age: 0,
        investmentValue: 0,
        investmentTime: 2.5,
        investmentInHumanTime: '2 anos e meio',
        investmentChar: 'Arrojado',
      },
    };
  }

  generateHumanTime(time) {
    const years = Math.floor(time);
    const remaining = (time - Math.floor(time));
    const text = `${years} anos ${remaining > 0 ? 'e meio' : ''}`;

    this.setState({ data: { ...this.state.data, investmentInHumanTime: text } });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <OnboardTextField
            title={'Oi como você gostaria de ser chamado?'}
            fieldLabel={'Digite seu nome'}
            type={'custom'}
            placeholder={'Nome'}
            placeholderTextColor={'red'}
            step={this.state.step}
            maxStep={this.state.maxStep}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            onChange={input => this.setState({ input })}
            value={this.state.input}
            onFieldSubmit={() => { Keyboard.dismiss(); this.setState({ data: { ...this.state.data, name: this.state.input }, input: '', step: this.state.step + 1 }); }}
            autoCorrect={false}
          />
        );
      case 2:
        return (
          <OnboardTextField
            title={`Legal ${this.state.data.name}, nos fale qual a sua idade.`}
            type={'only-numbers'}
            placeholder={'Idade'}
            fieldLabel={'Sua idade'}
            step={this.state.step}
            maxStep={this.state.maxStep}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            onChange={text => this.setState({ input: text })}
            onFieldSubmit={() => { Keyboard.dismiss(); this.setState({ data: { ...this.state.data, age: this.state.input }, input: '', step: this.state.step + 1 }) }}
            value={this.state.input}
            autoCorrect={false}
          />
        );
      case 3:
        return (
          <OnboardTextField
            title={'Qual valor você tem disponível para investir?'}
            type={'money'}
            placeholder={''}
            fieldLabel={'Quero investir R$'}
            step={this.state.step}
            maxStep={this.state.maxStep}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            onChange={text => this.setState({ input: text })}
            onFieldSubmit={() => { Keyboard.dismiss(); this.setState({ data: { ...this.state.data, investmentValue: this.state.input }, input: '', step: this.state.step + 1 }) }}
            value={this.state.input}
            autoCorrect={false}
          />
        );
      case 4:
        return (
          <InvestmentTime
            step={this.state.step}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            nextStep={() => this.setState({ step: this.state.step + 1 })}
            maxStep={this.state.maxStep}
            initialValue={this.state.data.investmentTime}
            onValueChange={value => this.setState({ data: { ...this.state.data, investmentTime: value } })}
            onSlidingComplete={val => this.generateHumanTime(val)}
            investTime={this.state.data.investmentInHumanTime}
          />
        );
      case 5:
        return (
          <InvestmentCharacteristics
            step={this.state.step}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            nextStep={() => this.setState({ step: this.state.step + 1 })}
            selectChar={investmentChar => this.setState({ investmentChar, step: this.state.step + 1 })}
            maxStep={this.state.maxStep}
          />
        );
      case 6:
        return (
          <InvestmentType
            step={this.state.step}
            prevStep={() => this.setState({ step: this.state.step - 1 })}
            nextStep={() => this.setState({ step: this.state.step + 1 })}
            maxStep={this.state.maxStep}
            onSelect={val => this.setState({ data: { ...this.state.data, investmentType: val } })}
          />
        );
      case 7:
        return (
          <InvestmentTaxes />
        );
      default:
        return <OnboardTextField
          title={'Oi como você gostaria de ser chamado?'}
          fieldLabel={'Digite seu nome'}
          step={this.state.step}
          maxStep={this.state.maxStep}
          prevStep={() => this.setState({ step: this.state.step - 1 })}
          onFieldChange={text => this.setState({ input: text })}
          onFieldSubmit={() => this.setState({ data: { ...this.state.data, name: this.state.input }, input: '', step: this.state.step + 1 })}
          inputValue={this.state.input}
          autoCorrect={false}
          kbType={'default'}
        />
    }
  }
}

export default InvestmentView;
