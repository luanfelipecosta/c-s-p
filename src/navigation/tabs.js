
import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View } from 'react-native';
import { Scene, Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes, AppColors } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Error from '@components/general/Error';
import StyleGuide from '@containers/StyleGuideView';

// Scenes 
import HomePage from '@containers/HomePage/HomePageView';

import Wallet from '@containers/Wallet/walletView';

import SellValue from '@containers/toSell/SellValue/SellValueContainer';
import ValueConfirmation from '@containers/toSell/ValueConfirmation/ValueConfirmationContainer';
import SellCostumerCPF from '@containers/toSell/SellCostumerCPF/SellCostumerCPFView';
import SellCashflyCode from '@containers/toSell/CashflyCode/CashflyCodeView';

import InvestmentHome from '@containers/Investment/InvestmentHomeView';
import InvestmentUserAge from '@containers/Investment/InvestmentUserAgeView';
import InvestmentValue from '@containers/Investment/InvestmentValueView';
import InvestmentTime from '@containers/Investment/InvestmentTimeView';
import InvestmentCharacteristics from '@containers/Investment/InvestmentCharacteristicsView';
import InvestmentObjective from '@containers/Investment/InvestmentObjectiveView';
import InvestmentSimulation from '@containers/Investment/InvestmentSimulationView';
import InvestmentTaxes from '@containers/Investment/InvestmentTaxesView';


import PaybackValue from '@containers/sendPayback/PaybackValue/PaybackValueView';
import PaybackCashflyCode from '@containers/sendPayback/CashflyCode/CashflyCodeView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <Icon onPress={() => Actions.homePage()} name={'arrow-back'} color={'#fff'} size={30} />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: 0,
  },
};

const navbarPropsTabsWithTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <Icon onPress={() => Actions.homePage()} name={'arrow-back'} color={'#fff'} size={30} />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};


const navbarPropsTabsHome = {
  ...navbarPropsTabs,
  renderLeftButton: () => <NavbarMenuButton />,
  renderRightButton: () => <Icon onPress={() => Actions.wallet()} name={'wallet'} type={'entypo'} color={'#fff'} size={30} />,
  navigationBarStyle: AppStyles.homeNavbar,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

const navbarPropsTabsLogoCross = {
  ...navbarPropsTabs,
  renderBackButton: () => <View style={{ flexDirection: 'row' }}><Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>CASH</Text><Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>FLY</Text></View>,
  renderRightButton: () => <Icon onPress={() => Actions.homePage()} name={'close'} color={'#fff'} size={30} />,
};

const navbarPropsTabsDarkTheme = {
  ...navbarPropsTabs,
  navigationBarStyle: AppStyles.darkNavbar,
  sceneStyle: {
    backgroundColor: AppColors.backgroundDark,
    paddingTop: AppSizes.tabbarHeight,
  },
  renderRightButton: () => <View style={{ flexDirection: 'row' }}><Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>CASH</Text><Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>FLY</Text></View>,
  renderLeftButton: () => <Icon onPress={() => Actions.homePage()} name={'arrow-back'} color={'#fff'} size={30} />,
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>

    <Scene
      {...navbarPropsTabsHome}
      key={'homePage'}
      component={HomePage}
    />

    <Scene
      {...navbarPropsTabsWithTabs}
      key={'wallet'}
      component={Wallet}
    />

    <Scene
      {...navbarPropsTabs}
      key={'toSell'}
      title={'Recipes'}
      hideTabBar
      icon={props => TabIcon({ ...props, type: 'ionicon', icon: 'md-pie' })}
    >
      <Scene
        {...navbarPropsTabs}
        key={'sellValue'}
        component={SellValue}
        title={'Realizar Venda'}
      />
      <Scene
        {...navbarPropsTabs}
        key={'sellValueConfirmation'}
        component={ValueConfirmation}
        title={'Realizar Venda'}
      />
      <Scene
        {...navbarPropsTabs}
        key={'sellCostumerCPF'}
        component={SellCostumerCPF}
        title={'Realizar Venda'}
      />
      <Scene
        {...navbarPropsTabsLogoCross}
        key={'sellCashflyCode'}
        component={SellCashflyCode}
      />
    </Scene>

    <Scene
      {...navbarPropsTabs}
      hideTabBar
      key={'sendPayback'}
      icon={props => TabIcon({ ...props, type: 'material-community', icon: 'coin' })}
      analyticsDesc={'Placeholder: Coming Soon'}
    >
      <Scene
        {...navbarPropsTabs}
        key={'paybackValue'}
        component={PaybackValue}
        title={'Enviar troco'}
      />

      <Scene
        {...navbarPropsTabs}
        key={'paybackCashflyCode'}
        component={PaybackCashflyCode}
        title={'Enviar troco'}
      />
    </Scene>
    <Scene
      key={'investment'}
      title={'Style Guide'}
      hideTabBar
      icon={props => TabIcon({ ...props, type: 'entypo', icon: 'shopping-bag' })}
      analyticsDesc={'StyleGuide: Style Guide'}
    >
      <Scene
        key={'investmentHome'}
        {...navbarPropsTabsDarkTheme}
        component={InvestmentHome}
        analyticsDesc={'Error: Example Error'}
      />

      <Scene
        key={'investmentUserAge'}
        {...navbarPropsTabsDarkTheme}
        component={InvestmentUserAge}
      />

      <Scene
        key={'investmentValue'}
        {...navbarPropsTabsDarkTheme}
        component={InvestmentValue}
      />

      <Scene
        key={'investmentTime'}
        {...navbarPropsTabsDarkTheme}
        component={InvestmentTime}
      />

      <Scene
        key={'investmentCharacteristics'}
        {...navbarPropsTabsDarkTheme}
        component={InvestmentCharacteristics}
      />

      <Scene
        key={'investmentObjective'}
        {...navbarPropsTabsDarkTheme}
        component={InvestmentObjective}
      />

      <Scene
        key={'investmentSimulation'}
        {...navbarPropsTabs}
        component={InvestmentSimulation}
      />

      <Scene
        key={'investmentTaxes'}
        title={'Taxas'}
        {...navbarPropsTabs}
        component={InvestmentTaxes}
      />

    </Scene>
    <Scene
      key={'error'}
      {...navbarPropsTabs}
      title={'Example Error'}
      component={Error}
      icon={props => TabIcon({ ...props, type: 'material-community', icon: 'bank' })}
      analyticsDesc={'Error: Example Error'}
    />

  </Scene>
);

export default scenes;
