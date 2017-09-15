/**
 * Auth Scenes
 */
import React from 'react';
import { Scene, ActionConst,Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

// Consts and Libs
import { AppConfig, AppStyles, AppSizes } from '@constants/';

// Scenes
import Authenticate from '@containers/auth/AuthenticateView';
import Payment from '@containers/costumer/Shop/PaymentView';
import LoginForm from '@containers/auth/Forms/LoginContainer';
import SignUpForm from '@containers/auth/Forms/SignUpContainer';
import ResetPasswordForm from '@containers/auth/Forms/ResetPasswordContainer';
import UpdateProfileForm from '@containers/auth/Forms/UpdateProfileContainer';
import OnboardView from '@containers/costumer/Onboarding/onboardingView';

import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';


const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  renderRightButton: () => <Icon onPress={() => (Actions.wallet())} name={'wallet'} type={'entypo'} color={'#fff'} size={26} />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: 51,
  },
};
const darkNavBarProps = {
  ...navbarPropsTabs,
  navigationBarStyle: { backgroundColor: '#0A0333', borderBottomWidth: 0 },
  renderLeftButton: () => { },
  renderRightButton: () => <NavbarMenuButton />,
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
      {...darkNavBarProps}
      key={'signUp'}
      clone
      component={OnboardView}
      analyticsDesc={'Sign Up'}
    />
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
