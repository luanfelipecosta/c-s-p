/**
 * Tabs Scenes
 */
import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native';
// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';
import { NavbarHomeMenuButton } from '@containers/ui/NavbarHomeMenuButton/NavbarHomeMenuButtonView';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import StyleGuide from '@containers/StyleGuideView';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import CostumerShop from '@containers/costumer/Shop/ShopContainer';
import CostumerPayment from '@containers/costumer/Shop/PaymentView';
import Wallet from '@containers/costumer/Wallet/walletView';
import ApplyPayback from '@containers/costumer/Payback/ApplyPayback';
import InvestmentView from '@containers/costumer/Investment/InvestmentView';
import SavingsView from '@containers/costumer/Savings/SavingsView';
import SafeView from '@containers/costumer/Savings/SafeView';
import CashflyCodeView from '@containers/costumer/Shop/CashflyCodeView';
import HomeView from '@containers/costumer/Home/HomeView';
import InvestmentSimulation from '@containers/costumer/Investment/InvestmentSimulation';
// import RecipeView from '@containers/recipes/RecipeView';

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <Icon onPress={() => (Actions.homePage())} name={'arrow-back'} type={'material'} color={'#fff'} size={26} />,
  renderRightButton: () => { },
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

const walletNavbarProps = {
  ...navbarPropsTabs,
  navigationBarStyle: AppStyles.wallet.navbar,
  renderLeftButton: '',
  renderRightButton: () => <Icon name={'dots-three-vertical'} type={'entypo'} color={'#fff'} size={20} />,
};
const darkNavBarProps = {
  ...navbarPropsTabs,
  navigationBarStyle: { backgroundColor: '#0A0333', borderBottomWidth: 0 },
  renderRightButton: () => <NavbarMenuButton />,
  renderLeftButton: () => <Icon onPress={() => (Actions.wallet())} name={'arrow-back'} type={'material'} color={'#fff'} size={26} />,
};

const homeNavbarProps = {
  ...navbarPropsTabs,
  navigationBarStyle: AppStyles.home.navbar,
  renderLeftButton: () => <NavbarMenuButton notLogo />,
  renderRightButton: () => <Icon onPress={() => (Actions.wallet())} name={'wallet'} type={'entypo'} color={'#fff'} size={26} />,
};


/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
    <Scene
      {...homeNavbarProps}
      key={'homePage'}
      component={HomeView}
    />
    <Scene
      key={'investmentSimulation'}
      {...navbarPropsTabs}
      component={InvestmentSimulation}
    />
    <Scene
      {...walletNavbarProps}
      key={'wallet'}
      component={Wallet}
      analyticsDesc={'Realizar Compra'}
    />
    <Scene
      {...navbarPropsTabs}
      key={'safeview'}
      component={SafeView}
    />
    <Scene
      {...navbarPropsTabs}
      key={'shop'}
      title={'Realizar Compra'}
      icon={props => TabIcon({ ...props, type: 'ionicon', icon: 'md-pie' })}
    >
      <Scene
        {...navbarPropsTabs}
        key={'costumerShop'}
        title={'Realizar Venda'}
        component={CostumerShop}
        analyticsDesc={'Realizar Compra'}
      />
      <Scene
        {...navbarPropsTabs}
        key={'paymentScreen'}
        component={CostumerPayment}
        title={'Realizar Compra'}
        analyticsDesc={'Realizar Compra'}
      />
      <Scene
        {...navbarPropsTabs}
        key={'cashflyCode'}
        component={CashflyCodeView}
        title={'Realizar Compra'}
        analyticsDesc={'Realizar Compra'}
      />
    </Scene>

    <Scene
      key={'payback'}
      {...navbarPropsTabs}
      title={'Enviar troco'}
      component={ApplyPayback}
      icon={props => TabIcon({ ...props, type: 'material-community', icon: 'coin' })}
      analyticsDesc={'Placeholder: Coming Soon'}
    />

    <Scene
      key={'investment'}
      {...darkNavBarProps}
      component={InvestmentView}
      icon={props => TabIcon({ ...props, type: 'entypo', icon: 'shopping-bag' })}
      analyticsDesc={'Error: Example Error'}
    >

    </Scene>
    <Scene
      key={'styleGuide'}
      {...darkNavBarProps}
      component={SavingsView}
      icon={props => TabIcon({ ...props, type: 'material-community', icon: 'bank' })}
    />
  </Scene>
);

export default scenes;
