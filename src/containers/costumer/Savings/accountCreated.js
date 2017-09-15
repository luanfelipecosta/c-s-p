import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
// our styles
import { AppColors, AppSizes } from '@theme';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';


import { Spacer } from '@ui/';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  header: {
    flexGrow: 7,
    backgroundColor: 'gray',
    paddingHorizontal: 30,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  body: {
    flexGrow: 3,
    backgroundColor: '#0A0333',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  description: {
    color: '#fff',
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
  startButton: {
    backgroundColor: AppColors.brand.accent,
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    width: AppSizes.screen.widthThreeQuarters,
    height: 50,
  },
});

const AccountCreated = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title} > Conta Criada </Text>
    </View>

    <View style={styles.body}>
      <Spacer size={25} />

      <Text style={styles.description} > Sua carteira Cashfly está pronta para uso. </Text>

      <Spacer size={25} />
      <TouchableHighlight onPress={Actions.app } style={styles.startButton} >
        <View >
          <Text style={{ fontWeight: '500' }}> COMEÇAR </Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
);


export default AccountCreated;
