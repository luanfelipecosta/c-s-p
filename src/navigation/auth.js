import React from 'react';
import { Scene, ActionConst, Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Scenes
import Authenticate from '@containers/auth/AuthenticateView';
import LoginForm from '@containers/auth/Forms/LoginContainer';
import SignUpForm from '@containers/auth/Forms/SignUpContainer';
import ResetPasswordForm from '@containers/auth/Forms/ResetPasswordContainer';
import UpdateProfileForm from '@containers/auth/Forms/UpdateProfileContainer';

import OnBoardingHome from '@containers/OnBoarding/OnboardingHomeView';
import OnBoardingNickname from '@containers/OnBoarding/OnboardingNicknameView';
import OnboardingTime from '@containers/OnBoarding/OnboardingTimeView';
import OnboardingBankSelect from '@containers/OnBoarding/OnboardingBankSelectView';
import OnboardingAccountType from '@containers/OnBoarding/OnboardingAccountTypeView';
import OnboardingAccountInfo from '@containers/OnBoarding/OnboardingAccountInfoView';
import OnboardingPassword from '@containers/OnBoarding/OnboardindPasswordView';
import OnboardingPasswordConfirmation from '@containers/OnBoarding/OnboardindPasswordConfirmationView';
import OnBoardingAccountCreated from '@containers/OnBoarding/OnboardingAccountCreatedView';

const navbarPropsTabs2 = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <Icon onPress={() => Actions.homePage()} name={'arrow-back'} color={'#fff'} size={30} />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: 0,
  },
};

const navbarPropsTabsDarkTheme2 = {
  ...navbarPropsTabs2,
  navigationBarStyle: AppStyles.darkNavbar,
  sceneStyle: {
    backgroundColor: AppColors.backgroundDark,
    paddingTop: AppSizes.tabbarHeight,
  },
  renderRightButton: () => <View style={{ flexDirection: 'row' }}><Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>CASH</Text><Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>FLY</Text></View>,
  renderLeftButton: () => <Icon onPress={() => Actions.app()} name={'arrow-back'} color={'#fff'} size={30} />,
};


/* Routes ==================================================================== */
const scenes = (
  <Scene key={'authenticate'}>
    <Scene
      hideNavBar
      key={'authLanding'}
      component={Authenticate}
      type={ActionConst.RESET}
      analyticsDesc={'Authentication'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'login'}
      title={'Login'}
      clone
      component={LoginForm}
      analyticsDesc={'Login'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'signUp'}
      title={'Sign Up'}
    >
      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingHome'}
        component={OnBoardingHome}
      />
      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingNickname'}
        component={OnBoardingNickname}
      />

      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingTime'}
        component={OnboardingTime}
      />

      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingBankSelect'}
        component={OnboardingBankSelect}
      />

      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingAccountType'}
        component={OnboardingAccountType}
      />
      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingAccountInfo'}
        component={OnboardingAccountInfo}
      />
      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingPassword'}
        component={OnboardingPassword}
      />
      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingPasswordConfirmation'}
        component={OnboardingPasswordConfirmation}
      />
      <Scene
        {...navbarPropsTabsDarkTheme2}
        key={'onBoardingAccountCreated'}
        component={OnBoardingAccountCreated}
      />
      

    </Scene>
    <Scene
      {...AppConfig.navbarProps}
      key={'passwordReset'}
      title={'Password Reset'}
      clone
      component={ResetPasswordForm}
      analyticsDesc={'Password Reset'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'updateProfile'}
      title={'Update Profile'}
      clone
      component={UpdateProfileForm}
      analyticsDesc={'Update Profile'}
    />
  </Scene>
);

export default scenes;
