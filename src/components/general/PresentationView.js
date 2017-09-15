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

const PresentationView = ({ nextStep, title, description, buttonText }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      {!!title && <Text style={styles.title} > {title} </Text>}
    </View>

    <View style={styles.body}>
      <Spacer size={25} />

      {!!description &&
        <Text style={styles.description} >
          {description}
        </Text>
      }

      <Spacer size={25} />
      <TouchableHighlight onPress={() => nextStep()} style={styles.startButton} >
        <View >
          {!!buttonText && <Text style={{ fontWeight: '500' }}> {buttonText} </Text>}
        </View>
      </TouchableHighlight>
    </View>
  </View>
);


export default PresentationView;
