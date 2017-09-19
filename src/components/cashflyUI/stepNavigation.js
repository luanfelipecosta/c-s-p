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
const stepNavigation = ({ prevStep, terms, nextStep, step, maxStep, firstStep, lastStep, disabledPrev, disabledNext }) => (
  <View style={styles.footer}>

    <TouchableOpacity onPress={() => firstStep || disabledPrev ? {} : prevStep()}>
      <Icon style={styles.arrow} name={'ios-arrow-round-back'} type={'ionicon'} size={50} color={firstStep || disabledPrev ? '#5d5875' : '#fff'} />
    </TouchableOpacity>

    {(step && maxStep) && <Text style={styles.counter} > {step}/{maxStep} </Text>}
    {!!terms && <Text style={{ color: '#5d5875', fontWeight: '700', flexGrow: 9, textAlign: 'center' }} > TERMOS </Text>}
    <TouchableOpacity onPress={() => lastStep || disabledNext ? {} : nextStep()}>
      <Icon style={styles.arrow} name={'ios-arrow-round-forward'} type={'ionicon'} size={50} color={lastStep || disabledNext ? '#5d5875' : '#fff'} />
    </TouchableOpacity>
  </View>
);

export default stepNavigation;
