/**
 * Navbar Menu Button
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
/* Component ==================================================================== */
const NavbarMenuButton = ({ toggleSideMenu, user, notLogo }) => (
  <TouchableOpacity
    onPress={toggleSideMenu}
    activeOpacity={0.7}
    hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
  >
    {!!notLogo &&
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          small
          rounded
          height={28}
          containerStyle={{ marginLeft: 10, marginRight: 7 }}
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          activeOpacity={0.7}
        />
        <Text style={{ color: '#fff', fontWeight: '500' }}> Usuário </Text>
      </View>
    }
    {!notLogo &&
      <View style={{ top: -2, flexDirection: 'row' }}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700' }}> CASH</Text>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>FLY</Text>
      </View>
    }
  </TouchableOpacity>
);

NavbarMenuButton.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.String,
  }),
};

NavbarMenuButton.defaultProps = {
  user: null,
};

/* Export Component ==================================================================== */
export default NavbarMenuButton;
