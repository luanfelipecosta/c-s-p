import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableHighlight } from 'react-native';

// our styles
import { AppColors, AppSizes, AppFonts } from '@theme';
import { Actions } from 'react-native-router-flux';

import { Avatar } from 'react-native-elements';

import { Spacer, WalletCard } from '@ui/';


const dummyData = [
  {
    title: '',
    name: 'Compra realizada',
    transactionType: 'Arrendondamento',
    value: '9,51',
    date: '11 SET',
    timeAgo: '5 dias atrás',

  },
  {
    title: '',
    name: 'Depósito direto',
    transactionType: 'Depósito da carteira',
    value: '1,48',
    date: '12 MAR',
    timeAgo: '11h atrás',

  },
  {
    title: '',
    name: 'Arredondamento automático',
    transactionType: 'Arrendondamento',
    value: '9,51',
    date: '11 SET',
    timeAgo: '5dias atrás',
  },
];
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  priceBlock: {
    backgroundColor: '#0A0333',
    flexDirection: 'column',
    flexGrow: 2,
    paddingTop: 15,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  priceTitle: {
    color: '#fff',
    fontWeight: '500',
  },
  billPrice: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 50,
    fontFamily: AppFonts.base.family,
    color: '#fff',
  },
  safeBody: {
    flexGrow: 6,
    backgroundColor: 'white',
  },
  charity: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  charityTitle: {
    fontWeight: '500',
    color: '#404142',
    marginBottom: 15,
  },
  charityEntities: {
    flexDirection: 'row',
  },
});

const SafeView = () => (
  <View style={styles.container}>
    <View style={styles.priceBlock} >
      <Text style={styles.priceTitle}> Seu cofrinho tem </Text>
      <Text style={styles.billPrice}>R$ 100,00</Text>
      <View />
    </View>
    <ScrollView style={styles.safeBody}>
      {
        dummyData.map((card, i) => (
          <WalletCard
            key={`payback_${i}`}
            title={card.title}
            transactionType={card.transactionType}
            name={card.name}
            value={card.value}
            date={card.date}
            timeAgo={card.timeAgo}
          />
        ))
      }
      <View style={styles.charity}>
        <Text style={styles.charityTitle}> Já ajudou alguém hoje?</Text>
        <ScrollView horizontal >
          <View style={styles.charityEntities}>

            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
            <View style={{ marginRight: 10 }}>
              <Avatar medium rounded onPress={() => { }} activeOpacity={1} overlayContainerStyle={{ backgroundColor: 'gray' }} />
            </View>
          </View>

        </ScrollView>
      </View>
      {
        dummyData.map((card, i) => (
          <WalletCard
            key={`payback_${i}`}
            title={card.title}
            transactionType={card.transactionType}
            name={card.name}
            value={card.value}
            date={card.date}
            timeAgo={card.timeAgo}
          />
        ))
      }

      <Spacer size={90} />
    </ScrollView>
  </View>
);


export default SafeView;
