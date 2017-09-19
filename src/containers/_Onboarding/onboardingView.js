import React, { Component } from 'react';
import { View, Text, Alert, } from 'react-native';

// our styles
import { AppColors, AppSizes } from '@theme';

// components
import RenderField from './renderField';
import AccountCreated from './accountCreated';


class OnboardingView extends Component {

  constructor() {
    super();

    this.state = {
      step: 1,
      fields: {
        name: '',
        birthday: '',
        email: '',
        password: '',
        confirmation: '',
      },
      input: '',
    };
  }

  submitForm() {
    Alert.alert('pw: ' + this.state.fields.password);
    if (this.state.fields.password !== this.state.fields.confirmation) {
      Alert.alert('Os campos de senha devem coincidir');
      this.setState({ fields: { ...this.state.fields, password: '', confirmation: '' }, input: '', step: 4 });
    }
    else {
      this.setState({ input: '', step: 6 });
    }
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <RenderField
            onFieldChange={value => this.setState({ input: value })}
            onFieldSubmit={() => this.setState({ fields: { ...this.state.fields, name: this.state.input }, input: '', step: this.state.step + 1 })}
            title={'Oi, como podemos te chamar?'}
            label={'Digite seu nome'}
            step={this.state.step}
            inputValue={this.state.input}
            secureTextEntry={false}
          />
        );
      case 2:
        return (
          <RenderField
            onFieldChange={value => this.setState({ input: value })}
            onFieldSubmit={() => this.setState({ fields: { ...this.state.fields, birthday: this.state.input }, input: '', step: this.state.step + 1 })}
            title={`Prazer ${this.state.fields.name}, Qual sua data de nascimento`}
            label={'Sua data de nascimento'}
            step={this.state.step}
            kbType={'numbers-and-punctuation'}
            inputValue={this.state.input}
            secureTextEntry={false}
          />
        );
      case 3:
        return (
          <RenderField
            onFieldChange={value => this.setState({ input: value })}
            onFieldSubmit={() => this.setState({ fields: { ...this.state.fields, email: this.state.input }, input: '', step: this.state.step + 1 })}
            title={`${this.state.fields.name}, nos diga qual seu melhor e-mail`}
            description={'Você vai usa-lo para fazer login na sua conta Cashfly.'}
            label={'Digite seu email'}
            step={this.state.step}
            kbType={'email-address'}
            inputValue={this.state.input}
            secureTextEntry={false}
          />
        );
      case 4:
        return (
          <RenderField
            onFieldChange={value => this.setState({ input: value })}
            onFieldSubmit={() => this.setState({ fields: { ...this.state.fields, password: this.state.input }, input: '', step: this.state.step + 1 })}
            title={`Agora ${this.state.fields.name}, crie uma senha.`}
            label={'Crie uma senha'}
            step={this.state.step}
            kbType={'email-address'}
            inputValue={this.state.input}
            secureTextEntry
          />
        );
      case 5:
        return (
          <RenderField
            onFieldChange={value => this.setState({ input: value })}
            onFieldSubmit={() => this.setState({ fields: { ...this.state.fields, confirmation: this.state.input }, input: '', step: this.state.step + 1 })}
            title={'Confirme a senha que você criou, as senhas devem ser iguais.'}
            label={'Confirme sua senha'}
            step={this.state.step}
            kbType={'email-address'}
            inputValue={this.state.input}
            secureTextEntry
          />
        );
      case 6:
        return (
          <AccountCreated />
        );
      default:
        return (<Text> hey </Text>);
    }
  }
}

export default OnboardingView;
