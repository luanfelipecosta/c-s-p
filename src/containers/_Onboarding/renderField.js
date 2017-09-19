import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
// our styles
import { AppColors, AppSizes } from '@theme';
import PropTypes from 'prop-types';


import { Spacer } from '@ui/';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  labelStyle: {
    fontSize: 13,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 30,
  },
  terms: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '700',
    alignSelf: 'flex-end',
  },
});

const RenderField = ({ title, description, label, onFieldChange, onFieldSubmit, kbType, inputValue, secureTextEntry }) => (
  <View style={styles.container}>
    <Spacer size={10} />
    <Text style={styles.terms}> TERMOS </Text>

    <Spacer size={90} />
    <Text style={styles.title}> {title} </Text>


    <Spacer size={10} />
    {!!description && <Text style={styles.description}> {description} </Text> }

    <FormLabel labelStyle={styles.labelStyle} >{label}</FormLabel>
    <FormInput
      onSubmitEditing={() => { onFieldSubmit(); }}
      onChangeText={(text) => { onFieldChange(text); }}
      keyboardType={kbType}
      value={inputValue}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
    />
  </View>
);
RenderField.propTypes = { title: PropTypes.string, label: PropTypes.string,  onFieldChange: PropTypes.func, onFieldSubmit: PropTypes.func };
RenderField.defaultProps = { title: '', label: '', onNameChange: null, onFieldSubmit: null };
RenderField.componentName = 'Error';

export default RenderField;
