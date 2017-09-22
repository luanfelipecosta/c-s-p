import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Carousel from 'react-native-carousel';

// Consts and Libs
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { Spacer, Text, Button } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: AppColors.brand.darkBackground,
  },
  logo: {
    width: 206,
    height: 72,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: { color: '#fff', fontSize: 20, textAlign: 'center', fontWeight: '500', paddingHorizontal: 50, marginTop: 35 },
  image: {
    width: AppSizes.screen.width * 0.55,
    resizeMode: 'contain',
    height: 210,
    alignSelf: 'center',
  },
  whiteText: {
    color: '#FFF',
  },
  slide: {
    width: AppSizes.screen.width,
    height: 373,
    paddingBottom: 40,
    justifyContent: 'flex-end',
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';

  constructor() {
    super();
    this.state = {
      slides: [
        {
          image: 'http://res.cloudinary.com/dfbcc7qin/image/upload/v1505835708/cashfly-onboarding-D-ilust_bccd5l.jpg',
          text: 'Use sua carteira CashFly para fazer investimentos',
        },
        {
          image: 'http://res.cloudinary.com/dfbcc7qin/image/upload/v1505835708/cashfly-onboarding-D-ilust_bccd5l.jpg',
          text: 'Use sua carteira CashFly para fazer investimentos',
        },
      ],
    };
  }
  render = () => (
    <View style={[styles.background, { flexGrow: 1, paddingTop: 20 }]}>
      <Image
        source={require('../../images/logo.png')}
        style={[styles.logo]}
      />
      <Carousel width={AppSizes.screen.width} indicatorSize={15} indicatorColor={'#FFFFFF'} inactiveIndicatorColor={'#D8D8D8'} indicatorAtBottom indicatorOffset={10} animate={false}>
        <View style={styles.slide}>
          <Image source={require('../../images/authenticate/1.jpg')} style={[styles.image]} />
          <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontWeight: '500', paddingHorizontal: 50, marginTop: 35 }}>Use sua carteira CashFly para fazer investimentos</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../images/authenticate/2.jpg')} style={[styles.image]} />
          <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontWeight: '500', paddingHorizontal: 50, marginTop: 35 }}>Receba pagamentos com sua carteira Cashfly</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../images/authenticate/3.jpg')} style={[styles.image]} />
          <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center', fontWeight: '500', paddingHorizontal: 50, marginTop: 35 }}>Facilite o troco com sua carteira CashFly</Text>
        </View>
      </Carousel>
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

        <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
          <View style={[AppStyles.flex1]} />
          <View style={[AppStyles.flex2]}>
            <Button
              small
              title={'Esqueceu a senha?'}
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
