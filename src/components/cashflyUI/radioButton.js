import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-flexi-radio-button';

const styles = StyleSheet.create({
  radioButton: {
    paddingVertical: 30
  },
  radioText: {
    marginLeft: 35,
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
const CustomRadioButton = ({ value, text }) => (
  <RadioButton
    style={styles.radioButton}
    value={value || ''}
    highlightColor={'#ccc8b9'}
  >
    <Text style={styles.radioText}>{text}</Text>
  </RadioButton>
);

export default CustomRadioButton;
