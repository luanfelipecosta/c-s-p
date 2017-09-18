import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { AppSizes } from '@theme/';

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: AppSizes.screen.width,
    alignItems: 'center',
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
const stepNavigation = ({ prevStep, nextStep, step, maxStep, firstStep, lastStep }) => (
  <View style={styles.footer}>

    <TouchableOpacity onPress={() => firstStep ? {} : prevStep()}>
      <Icon style={styles.arrow} name={'ios-arrow-round-back'} type={'ionicon'} size={50} color={firstStep ? '#5d5875' : '#fff'} />
    </TouchableOpacity>

    <Text style={styles.counter} > {step}/{maxStep} </Text>

    <TouchableOpacity onPress={() => nextStep()}>
      <Icon style={styles.arrow} name={'ios-arrow-round-forward'} type={'ionicon'} size={50} color={'#fff'} />
    </TouchableOpacity>
  </View>
);

export default stepNavigation;
