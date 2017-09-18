/**
 * Style Guide
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  ListView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { SocialIcon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';
// Scenes
import PaybackTab from './paybackTab';
import PaymentTab from './paymentTab';
import BalanceTab from './balanceTab';

// Components
import {
  Alerts,
  Button,
  Card,
  Spacer,
  List,
  ListItem,
  FormInput,
  FormLabel,
} from '@components/ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: AppColors.brand.primary,
  },
  tabbarIndicator: {
    backgroundColor: AppColors.brand.accent,
  },
  tabbar_text: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class StyleGuide extends Component {
  static componentName = 'StyleGuide';

  constructor(props) {
    super(props);

    this.state = {
      navigation: {
        index: 0,
        routes: [
          { key: '0', title: 'TROCO' },
          { key: '1', title: 'PAGAMENTOS' },
          { key: '2', title: 'SALDOS' },
        ],
      },
    };
  }

  /**
    * On Change Tab
    */
  handleChangeTab = (index) => {
    this.setState({
      navigation: { ...this.state.navigation, index },
    });
  }

  /**
    * Which component to show
    */
  renderScene = ({ route }) => {
    switch (route.key) {
      case '0':
        return (
          <PaybackTab />
        );
      case '1':
        return (
          <PaymentTab />
        );
      case '2':
        return (
          <BalanceTab />
        );
      default:
        return (
          <View />
        );
    }
  }

  /**
    * Header Component
    */
  renderHeader = props => (
    <TabBar
      {...props}
      style={styles.tabbar}
      indicatorStyle={styles.tabbarIndicator}
      renderLabel={scene => (
        <Text style={[styles.tabbar_text]}>{scene.route.title}</Text>
      )}
    />
  )

  render = () => (
    <TabViewAnimated
      style={[styles.tabContainer]}
      renderScene={this.renderScene}
      renderHeader={this.renderHeader}
      navigationState={this.state.navigation}
      onRequestChangeTab={this.handleChangeTab}
    />
  )
}

/* Export Component ==================================================================== */
export default StyleGuide;
