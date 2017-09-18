import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.darkBackground,
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  render = () => (
    <View style={[AppStyles.container, AppStyles.container, styles.background, { justifyContent: 'space-between' }]}>
      <Image
        source={require('../../images/logo.png')}
        style={[styles.logo]}
      />
      <View>
        <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
          <View style={[AppStyles.flex1]}>
            <Button
              title={'CRIAR CONTA'}
              color={'#000'}
              onPress={Actions.signUp}
              backgroundColor={AppColors.brand.secondary}
            />
          </View>
        </View>

        <Spacer size={20} />

        <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
          <View style={[AppStyles.flex1]}>
            <Button
              title={'LOGIN'}
              color={'#000'}
              backgroundColor={AppColors.brand.secondary}
            />
          </View>
        </View>

        <Spacer size={15} />

        <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
          - or -
      </Text>

        <Spacer size={10} />

        <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
          <View style={[AppStyles.flex1]} />
          <View style={[AppStyles.flex2]}>
            <Button
              small
              title={'Skip'}
              color={AppColors.brand.secondary}
              onPress={Actions.app}
              raised={false}
              backgroundColor={'transparent'}
            />
          </View>
          <View style={[AppStyles.flex1]} />
        </View>
      </View>

      <Spacer size={40} />
    </View>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
