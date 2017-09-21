import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';


const FormInput = ({ type, placeholder, onChange, value, theme, label, options }) => (
  <View style={{ paddingHorizontal: 24 }}>
    <Text
      style={{
        fontSize: 10,
        marginBottom: 3,
        color: (theme === 'dark') ? '#5d5875' : '#767676',
      }}
    >
      {label}
    </Text>
    <View style={{ borderBottomWidth: 1, borderBottomColor: (theme === 'dark') ? '#5d5875' : '#AEAEAE' }}>
      {type !== 'text' && <TextInputMask
        type={type}
        placeholder={placeholder}
        placeholderTextColor={(theme === 'dark') ? '#5d5875' : 'gray'}
        style={{
          width: 280,
          height: 25,
          color: (theme === 'dark') ? '#fff' : '#161616',
        }}
        onChangeText={val => onChange(val)}
        value={value}
        underlineColorAndroid={'transparent'}
        options={type === 'custom' ? maskOptions : (options || {})}
      />}
      {type === 'text' &&
        <TextInput
          style={{
            width: 280,
            height: 25,
            color: (theme === 'dark') ? '#fff' : '#161616',
          }}
          placeholderTextColor={(theme === 'dark') ? '#5d5875' : 'gray'}
          placeholder={placeholder}
          onChangeText={val => onChange(val)}
          value={value}
          underlineColorAndroid={'transparent'}
        />
      }
    </View>
  </View>
);

export default FormInput;
