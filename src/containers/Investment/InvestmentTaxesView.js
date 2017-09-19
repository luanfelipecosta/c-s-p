import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Spacer } from '@ui/';
import { FormInput, StepNavigation } from '@cashflyUI/';
import { AppStyles, AppColors, AppSizes } from '@theme/';

class InvestmentTaxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxStep: 6,
      step: 1,
    };
  }

  render() {
    return (
      <View style={[AppStyles.container, { backgroundColor: AppColors.brand.darkBackground }]} >
        <Grid>
          <Row style={{ paddingHorizontal: 15, paddingTop: 40 }}>
            <ScrollView>
              <Text style={{ color: '#fff', marginBottom: 15 }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta eleifend semper. Proin finibus arcu ut lorem auctor maximus. Phasellus accumsan ut orci quis tempus. Proin fermentum neque sed ante suscipit iaculis. Vestibulum volutpat porta tellus, sed cursus ante aliquet a. Vivamus a elit in est luctus pretium. Duis ultricies neque eget luctus accumsan. Nullam faucibus mauris id varius porta.
              </Text>
              <Text style={{ color: '#fff', marginBottom: 15 }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta eleifend semper. Proin finibus arcu ut lorem auctor maximus. Phasellus accumsan ut orci quis tempus. Proin fermentum neque sed ante suscipit iaculis. Vestibulum volutpat porta tellus, sed cursus ante aliquet a. Vivamus a elit in est luctus pretium. Duis ultricies neque eget luctus accumsan. Nullam faucibus mauris id varius porta.
              </Text>
              <Text style={{ color: '#fff', marginBottom: 15 }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta eleifend semper. Proin finibus arcu ut lorem auctor maximus. Phasellus accumsan ut orci quis tempus. Proin fermentum neque sed ante suscipit iaculis. Vestibulum volutpat porta tellus, sed cursus ante aliquet a. Vivamus a elit in est luctus pretium. Duis ultricies neque eget luctus accumsan. Nullam faucibus mauris id varius porta.
              </Text>
              <Text style={{ color: '#fff', marginBottom: 15 }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta eleifend semper. Proin finibus arcu ut lorem auctor maximus. Phasellus accumsan ut orci quis tempus. Proin fermentum neque sed ante suscipit iaculis. Vestibulum volutpat porta tellus, sed cursus ante aliquet a. Vivamus a elit in est luctus pretium. Duis ultricies neque eget luctus accumsan. Nullam faucibus mauris id varius porta.
              </Text>
              <Text style={{ color: '#fff', marginBottom: 15 }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta eleifend semper. Proin finibus arcu ut lorem auctor maximus. Phasellus accumsan ut orci quis tempus. Proin fermentum neque sed ante suscipit iaculis. Vestibulum volutpat porta tellus, sed cursus ante aliquet a. Vivamus a elit in est luctus pretium. Duis ultricies neque eget luctus accumsan. Nullam faucibus mauris id varius porta.
              </Text>
              
            </ScrollView>
          </Row>
          <Row style={AppStyles.fowardButtonContainer}>
            <TouchableHighlight style={AppStyles.fowardButton} onPress={() => Actions.homePage()} >
              <Text style={{ fontWeight: '500' }}> CONCORDAR </Text>
            </TouchableHighlight>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default InvestmentTaxes;
