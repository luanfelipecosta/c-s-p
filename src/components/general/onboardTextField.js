import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, Icon } from 'react-native-elements';
import { Spacer } from '@ui/';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { TextInputMask } from 'react-native-masked-text';

import { AppSizes } from '@constants/';

const maskOptions = {
	/**
	 * mask: (String | required | default '')
	 * the mask pattern
	 * 9 - accept digit.
	 * A - accept alpha.
	 * S - accept alphanumeric.
	 * * - accept all, EXCEPT white space.
	*/
  mask: 'SSSSSSSSSSSSSSSSSSSSSSSSSS',

	/**
	 * validator: (Function | optional | defaults returns true)
	 * use this funcion to inform if the inputed value is a valid value (for invalid phone numbers, for example). The isValid method use this validator.
	*/
  validator: function (value, settings) {
    return true
  },
	/**
	 * getRawValue: (Function | optional | defaults return current masked value)
	 * use this function to parse and return values to use what you want.
	 * for example, if you want to create a phone number mask (999) 999-99-99 but want to get only
	 * the numbers for value, use this method for this parse step.
	*/
  getRawValue: function (value, settings) {
    return 'my converted value';
  },
	/**
	 * translation: (Object | optional | defaults 9, A, S, *)
	 * the dictionary that translate mask and value.
	 * you can change defaults by simple override the key (9, A, S, *) or create some new.
	*/
  translation: {
    // this is a custom translation. The others (9, A, S, *) still works.
    // this translation will be merged and turns into 9, A, S, *, #.
    '#': function (val) {
      if (val === ' ') {
        return val;
      }

      // if returns null, undefined or '' (empty string), the value will be ignored.
      return null;
    },
    // in this case, we will override build-in * translation (allow all characters)
    // and set this to allow only blank spaces and some special characters.
    '*': function (val) {
      return [' ', '#', ',', '.', '!'].indexOf(val) >= 0 ? val : null;
    },
  },
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formTitle: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  formField: {
    borderBottomColor: '#d3d1d1',
    borderBottomWidth: 1.5,
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
  input: {
    width: 300,
    height: 50,
    color: '#fff',
  },

});
const OnboardTextField = ({ title, placeholder, options, value, fieldLabel, step, maxStep, secureTextEntry, prevStep, onChange, onFieldSubmit, type }) => (
  <View style={styles.container} >
    <View style={{ paddingHorizontal: 20 }}>
      <View style={styles.formTitle}>
        <Spacer size={60} />
        {!!title && <Text style={styles.title}> {title}</Text>}
        <Spacer size={30} />
      </View>
      <View style={styles.formField}>
        {!!fieldLabel && <FormLabel labelStyle={{ fontWeight: '200' }}>{fieldLabel} </FormLabel>}
        <TextInputMask
          type={type}
          placeholder={placeholder}
          placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
          style={styles.input}
          onChangeText={val => onChange(val)}
          value={value}
          underlineColorAndroid={'transparent'}
          options={type === 'custom' ? maskOptions : {}}
        />
      </View>
    </View>

    <Spacer size={30} />
    <View style={styles.footer}>

      <TouchableOpacity onPress={() => prevStep()}>
        <Icon style={styles.arrow} name={'ios-arrow-round-back'} type={'ionicon'} size={30} color={'#fff'} />
      </TouchableOpacity>

      <Text style={styles.counter} > {step}/{maxStep} </Text>

      <TouchableOpacity onPress={() => onFieldSubmit()}>
        <Icon style={styles.arrow} name={'ios-arrow-round-forward'} type={'ionicon'} size={30} color={'#fff'} />
      </TouchableOpacity>
      <KeyboardSpacer />

    </View>
  </View>
);

export default OnboardTextField;
