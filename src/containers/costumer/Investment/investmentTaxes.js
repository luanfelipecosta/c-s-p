import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, KeyboardAvoidingView, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Spacer } from '@ui/';

import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { AppSizes, AppColors } from '@constants/';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  formTitle: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  formField: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
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
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },

});
const InvestmentTaxes = props => (
  <View style={styles.container} >
    <ScrollView contentContainerStyle={{ flexGrow: 10, padding: 20 }}>
      <Text style={{ color: 'white' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta eleifend semper. Proin finibus arcu ut lorem auctor maximus. Phasellus accumsan ut orci quis tempus. Proin fermentum neque sed ante suscipit iaculis. Vestibulum volutpat porta tellus, sed cursus ante aliquet a. Vivamus a elit in est luctus pretium. Duis ultricies neque eget luctus accumsan. Nullam faucibus mauris id varius porta.

      Pellentesque vitae sodales tortor. Pellentesque ut augue eu arcu gravida consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum convallis dictum cursus. Ut magna lorem, suscipit a purus eu, eleifend auctor nunc. Duis tristique, mauris eget scelerisque porttitor, lorem augue sagittis ex, ac efficitur nisl nulla nec eros. Aliquam erat volutpat. In viverra ut ante sed molestie.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta eleifend semper. Proin finibus arcu ut lorem auctor maximus. Phasellus accumsan ut orci quis tempus. Proin fermentum neque sed ante suscipit iaculis. Vestibulum volutpat porta tellus, sed cursus ante aliquet a. Vivamus a elit in est luctus pretium. Duis ultricies neque eget luctus accumsan. Nullam faucibus mauris id varius porta.

      Pellentesque vitae sodales tortor. Pellentesque ut augue eu arcu gravida consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum convallis dictum cursus. Ut magna lorem, suscipit a purus eu, eleifend auctor nunc. Duis tristique, mauris eget scelerisque porttitor, lorem augue sagittis ex, ac efficitur nisl nulla nec eros. Aliquam erat volutpat. In viverra ut ante sed molestie.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta eleifend semper. Proin finibus arcu ut lorem auctor maximus. Phasellus accumsan ut orci quis tempus. Proin fermentum neque sed ante suscipit iaculis. Vestibulum volutpat porta tellus, sed cursus ante aliquet a. Vivamus a elit in est luctus pretium. Duis ultricies neque eget luctus accumsan. Nullam faucibus mauris id varius porta.

      Pellentesque vitae sodales tortor. Pellentesque ut augue eu arcu gravida consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum convallis dictum cursus. Ut magna lorem, suscipit a purus eu, eleifend auctor nunc. Duis tristique, mauris eget scelerisque porttitor, lorem augue sagittis ex, ac efficitur nisl nulla nec eros. Aliquam erat volutpat. In viverra ut ante sed molestie.

      </Text>
      <Spacer size={90} />
    </ScrollView>
    <TouchableOpacity onPress={() => { Alert.alert('Investimento criado com sucesso!'); Actions.homePage(); }} style={{ height: 48, width: screenWidth, position: 'absolute', bottom: 0, backgroundColor: '#41ff89', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: '500' }}> CONCORDAR </Text>
    </TouchableOpacity>

  </View>
);

export default InvestmentTaxes;
