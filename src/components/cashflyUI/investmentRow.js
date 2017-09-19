import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AppSizes } from '@theme/';

const InvestmentRow = ({ title, subtitle, color, rightText }) => (
  <View style={{ flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', height: 72, width: AppSizes.screen.width }}>
    <View style={{}}>
      <Avatar
        medium
        rounded
        activeOpacity={0.2}
        overlayContainerStyle={{ backgroundColor: color || 'orange' }}
        containerStyle={{ marginHorizontal: 15 }}
      />
    </View>

    <View style={{ paddingRight: 27, justifyContent: 'space-between', flexGrow: 1, flexDirection: 'row', paddingVertical: 19, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}>
      <View>
        <Text style={{ fontWeight: '500' }}>{title}</Text>
        <Text style={{ color: '#797979' }}>{subtitle}</Text>
      </View>
      <View style={{ justifyContent: 'flex-end' }}>
        <Text style={{ fontWeight: '500' }}>{rightText}</Text>
      </View>
    </View>
  </View>
);

export default InvestmentRow;
