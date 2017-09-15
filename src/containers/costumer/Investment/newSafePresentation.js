import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

// our styles
import { AppColors, AppSizes } from '@theme';
import { Actions } from 'react-native-router-flux';


import { Spacer } from '@ui/';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  header: {
    flexGrow: 10,
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
    fontSize: 25,
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
    width: AppSizes.screen.widthThreeQuarters,
    height: 50,
  },
});

const NewSafePresentation = ({ nextStep }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title} > Cofrinho Cashfly </Text>
    </View>

    <View style={styles.body}>
      <Spacer size={25} />

      <Text style={styles.description} >
        Guarde dinheiro automaticamente, por dia ou por compra. Do seu jeito, com clareza e com um objetivo definido.
      </Text>

      <Spacer size={25} />
      <TouchableHighlight onPress={() => nextStep()} style={styles.startButton} >
        <View >
          <Text style={{ fontWeight: '500' }}> CRIAR COFRINHO </Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
);


export default NewSafePresentation;
