import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Spacer } from '@ui/';

import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { AppSizes } from '@constants/';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  formTitle: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  formField: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    color: '#fff',
  },
  footer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  counter: {
    flexGrow: 9,
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 9,
    color: '#fff',
  },
  arrow: {
    flexGrow: 1,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },

});
const SafeTypeField = ({ step, prevStep, nextStep, onSelect }) => (
  <View style={styles.container} >
    <View style={styles.formTitle}>
      <Spacer size={60} />
      <Text style={styles.title}> Como você vai guardar seu dinheiro? </Text>
      <Spacer size={30} />
    </View>
    <View style={styles.formField}>
      <RadioGroup
        color={'#fff'}
        onSelect={val => onSelect(val)}
      >
        <RadioButton value={'item1'} >
          <Text style={styles.text}> Por dia </Text>
        </RadioButton>

        <RadioButton value={'item2'}>
          <Text style={styles.text}> Por compra </Text>
        </RadioButton>

        <RadioButton value={'item3'}>
          <Text style={styles.text}> Por dia  e por compra </Text>

        </RadioButton>
      </RadioGroup>
    </View>
    <Spacer size={30} />

    <KeyboardAvoidingView behavior={'position'}>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => prevStep()}>
          <Icon style={styles.arrow} name={'ios-arrow-round-back'} type={'ionicon'} size={30} color={'#fff'} />
        </TouchableOpacity>

        <Text style={styles.counter} > {step}/4 </Text>

        <TouchableOpacity onPress={() => nextStep()}>
          <Icon style={styles.arrow} name={'ios-arrow-round-forward'} type={'ionicon'} size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  </View>
);

export default SafeTypeField;
