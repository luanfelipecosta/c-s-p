import React, { Component } from 'react';
import { View, Alert, Text, StyleSheet, Slider, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { FormLabel, FormInput, Icon } from 'react-native-elements';
import { Spacer } from '@ui/';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { AppSizes } from '@constants/';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formTitle: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  list: {
    alignItems: 'center',
    paddingHorizontal: 10,
    height: screenHeight * 0.6,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    color: '#fff',
  },
  footer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
const InvestmentCharacteristics = ({ step, prevStep, nextStep, maxStep, selectChar }) => (
  <View style={styles.container} >
    <View style={styles.formTitle}>
      <Spacer size={20} />
      <Text style={styles.title}> Qual a caracteristica dos seu investimento? </Text>
      <Spacer size={20} />
    </View>
    <View style={styles.list}>
      <ScrollView>
        <TouchableOpacity onPress={(type = 'moderado') => selectChar(type)}>
          <View style={{ maxWidth: screenWidth - 30, height: 170, flexDirection: 'row', marginBottom: 25 }}>
            <View style={{ maxWidth: (screenWidth) / 2, backgroundColor: 'white', flexGrow: 1, paddingLeft: 15, paddingBottom: 15, justifyContent: 'flex-end' }} >
              <Text style={{ fontWeight: '500', marginBottom: 10 }}>Investimento </Text>
              <Text style={{ fontWeight: '500', marginBottom: 15, fontSize: 20 }}>Conservador </Text>

              <Text>Retornos consistentes, privilegiando a segurança </Text>
            </View>
            <View style={{ backgroundColor: 'gray', flexGrow: 1, minWidth: 130 }} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={(type = 'moderado') => selectChar(type)}>
          <View style={{ maxWidth: screenWidth - 30, height: 170, flexDirection: 'row', marginBottom: 25 }}>
            <View style={{ maxWidth: (screenWidth) / 2, backgroundColor: 'white', flexGrow: 1, paddingLeft: 15, paddingBottom: 15, justifyContent: 'flex-end' }} >
              <Text style={{ fontWeight: '500', marginBottom: 10 }}>Investimento </Text>
              <Text style={{ fontWeight: '500', marginBottom: 15, fontSize: 20 }}>Moderado </Text>

              <Text>Retornos consistentes, privilegiando a segurança </Text>
            </View>
            <View style={{ backgroundColor: 'gray', flexGrow: 1, minWidth: 130 }} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={(type = 'arrojado') => selectChar(type)}>
          <View style={{ maxWidth: screenWidth - 30, height: 170, flexDirection: 'row', marginBottom: 25 }}>
            <View style={{ maxWidth: (screenWidth) / 2, backgroundColor: 'white', flexGrow: 1, paddingLeft: 15, paddingBottom: 15, justifyContent: 'flex-end' }} >
              <Text style={{ fontWeight: '500', marginBottom: 10 }}>Investimento </Text>
              <Text style={{ fontWeight: '500', marginBottom: 15, fontSize: 20 }}>Arrojado </Text>

              <Text>Retornos consistentes, privilegiando a segurança </Text>
            </View>
            <View style={{ backgroundColor: 'gray', flexGrow: 1, minWidth: 130 }} />
          </View>
        </TouchableOpacity>


      </ScrollView>
    </View>
    <View style={styles.footer}>

      <TouchableOpacity onPress={() => prevStep()}>
        <Icon style={styles.arrow} name={'ios-arrow-round-back'} type={'ionicon'} size={30} color={'#fff'} />
      </TouchableOpacity>

      <Text style={styles.counter} > {step}/{maxStep} </Text>

      <TouchableOpacity onPress={() => nextStep()}>
        <Icon style={styles.arrow} name={'ios-arrow-round-forward'} type={'ionicon'} size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>

  </View>
);

export default InvestmentCharacteristics;
