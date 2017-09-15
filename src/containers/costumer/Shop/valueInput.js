import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  Alert,
  Text,
  ActivityIndicator,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Spacer } from '@ui/';
import { Actions } from 'react-native-router-flux';
import { AppColors, AppSizes } from '@theme/';
import { TextInputMask } from 'react-native-masked-text';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
  },
  shopImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  h1: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  onBoardingText: {
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 50,
  },
});

const ValueInput = ({ nextStep, onChange, title, text, type, placeholder, options, value }) => (

  <View style={[{ backgroundColor: '#fff', flex: 1, flexDirection: 'column' }]}>

    <View style={{ flexGrow: 11, paddingHorizontal: 20 }}>
      <Spacer size={40} />
      <Text style={[styles.h1]} >{title} </Text>

      <Spacer size={15} />

      <Text> {text} </Text>

      <Spacer size={30} />

      <View style={{ borderBottomColor: '#d3d1d1', borderBottomWidth: 1.5 }}>
        <TextInputMask
          type={type}
          placeholder={placeholder}
          style={styles.input}
          options={options ? options : null}
          onChangeText={val => onChange(val)}
          value={value}
        />
      </View>
    </View>
    <TouchableOpacity onPress={() => nextStep()} >
      <View style={{ flexGrow: 1.5, height: 50, backgroundColor: AppColors.brand.accent, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: '500' }}> PROSSEGUIR </Text>
      </View>
    </TouchableOpacity>
    <KeyboardSpacer />
  </View>
);

export default ValueInput;
