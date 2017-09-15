import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, Slider, Icon } from 'react-native-elements';
import { Spacer } from '@ui/';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AppSizes, AppColors } from '@constants/';


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
    position: 'absolute',
    bottom: 5,

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
const InvestmentTime = ({ step, prevStep, nextStep, maxStep, initialValue, onValueChange, investTime, onSlidingComplete }) => (
  <View style={styles.container} >
    <View>
      <View style={styles.formTitle}>
        <Spacer size={60} />

        <Text style={styles.title}> Por quanto tempo você deseja investir </Text>
        <Spacer size={30} />

        <Slider
          minimumValue={1}
          maximumValue={10}
          style={{ width: 300 }}
          minimumTrackTintColor={'#41ff89'}
          maximumTrackTintColor={'#41ff89'}
          thumbTintColor={'#fff'}
          step={0.5}
          value={initialValue}
          onValueChange={val => onValueChange(val)}
          onSlidingComplete={val => onSlidingComplete(val)}
        />
        <Spacer size={10} />

        <Text style={styles.title}> {investTime} </Text>

      </View>
    </View>
    <View style={styles.footer}>

      <TouchableOpacity onPress={() => prevStep()}>
        <Icon style={styles.arrow} name={'ios-arrow-round-back'} type={'ionicon'} size={30} color={'#fff'} />
      </TouchableOpacity>

      <Text style={styles.counter} > {step}/{maxStep} </Text>

      <TouchableOpacity onPress={() => nextStep()}>
        <Icon style={styles.arrow} name={'ios-arrow-round-forward'} type={'ionicon'} size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
    <KeyboardSpacer />

  </View>
);

export default InvestmentTime;
