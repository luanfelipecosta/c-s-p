/**
 * Navbar Menu Button
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from 'react-native-elements';
/* Component ==================================================================== */
const NavbarHomeMenuButton = () => (
  <TouchableOpacity
    onPress={() => {}}
    activeOpacity={0.7}
    style={{ top: -2, flexDirection: 'row' }}
    hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
  >
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700' }}> CASH</Text>
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>FLY</Text>

  </TouchableOpacity>
);

/* Export Component ==================================================================== */
export default NavbarHomeMenuButton;
