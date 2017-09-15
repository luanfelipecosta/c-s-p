import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Spacer } from '@ui/';
import { AppSizes, AppColors } from '@constants/';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const InvestmentSimulation = props => (
  <View style={styles.container} >
    <View style={{ backgroundColor: 'red' }} >
    </View>
    <View style={{ backgroundColor: 'green' }} >
    </View>
    <View style={{ backgroundColor: 'blue' }} >
    </View>
  </View>
);

export default InvestmentSimulation;
