import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Dimensions, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, Icon } from 'react-native-elements';
import { Spacer } from '@ui/';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
    paddingBottom: 70,
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

});
const SafeDescriptionField = ({ step, prevStep, nextStep }) => (
  <View style={styles.container} >
    <View style={styles.formTitle}>
      <Spacer size={60} />
      <Text style={styles.title}> Escreva uma descrição para o cofrinho que está criando </Text>
      <Spacer size={30} />
    </View>
    <View style={styles.formField}>
      <FormLabel labelStyle={{ fontWeight: '200' }}>Descrição: </FormLabel>
      <FormInput inputStyle={{ width: 250 }} onChangeText={() => { }} />
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

export default SafeDescriptionField;
