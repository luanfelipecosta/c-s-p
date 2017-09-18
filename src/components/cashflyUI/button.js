import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

const CustomButton = ({ backgroundColor, onPress, color, text }) => (
  <TouchableHighlight underlayColor={'rgba(0, 0, 0, 0.1)'} onPress={onPress} style={{ backgroundColor: backgroundColor || 'transparent', height: 36, paddingBottom: 10, paddingHorizontal: 10, justifyContent: 'flex-end', marginLeft: 10 }}>
    <Text style={{ fontWeight: '500', color: color || '#000' }}> {text} </Text>
  </TouchableHighlight>
);

export default CustomButton;
