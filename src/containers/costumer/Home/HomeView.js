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
import { SocialIcon, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Spacer } from '@ui/';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';

const styles = StyleSheet.create({
  // Tab Styles
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 50,
  },
  description: {
    color: AppColors.brand.light,
    textAlign: 'center',
    fontWeight: '500',
  },
});

class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Icon size={90} color={AppColors.brand.light} name={'chat-bubble-outline'} type={'material'} />
        <Spacer size={15} />
        <Text style={styles.description} >
          Não há nada para mostrar nada ainda, comece a usar sua carteira Cashfly
      </Text>
      </View>
    );
  }
}
export default HomeView;
