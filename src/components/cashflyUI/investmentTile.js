import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Spacer } from '@ui/';

const InvestmentTile = ({ title, bigTitle, description, onPress }) => (
  <TouchableOpacity activeOpacity={0.1} onPress={onPress}>
    <Row style={{ marginTop: 30, height: 150 }}>
      <Col style={{ backgroundColor: 'white', padding: 15, justifyContent: 'flex-end' }} >
        <Text style={{ fontWeight: '500' }}>{title || ''}</Text>
        <Spacer size={12} />
        <Text style={{ fontWeight: '500', fontSize: 24 }}>{bigTitle}</Text>
        <Spacer size={8} />
        <Text style={{ fontWeight: '500', fontSize: 12 }}>{description}</Text>
      </Col>
      <Col style={{ backgroundColor: 'lightgray', width: 150 }} />
    </Row>
  </TouchableOpacity>
);

export default InvestmentTile;
