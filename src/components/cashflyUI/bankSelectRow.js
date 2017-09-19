import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AppSizes } from '@theme/';

const BankSelectRow = ({ bankName, color, onPress }) => (
  <TouchableHighlight onPress={onPress} >
    <View style={{ flexDirection: 'row', alignItems: 'center', height: 72, width: AppSizes.screen.width }}>
      <View style={{}}>
        <Avatar
          medium
          rounded
          activeOpacity={0.2}
          overlayContainerStyle={{ backgroundColor: color || 'gray' }}
          containerStyle={{ marginHorizontal: 25 }}
        />
      </View>

      <View style={{ paddingRight: 20, justifyContent: 'space-between', flexGrow: 1, flexDirection: 'row', paddingVertical: 19 }}>
        <View>
          <Text style={{ fontWeight: '500', color: '#fff', fontSize: 16 }}>{bankName}</Text>
        </View>
      </View>
    </View>
  </TouchableHighlight>
);

export default BankSelectRow;
