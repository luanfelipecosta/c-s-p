import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import { BalanceCard } from '@ui/';

class BalanceTab extends Component {

  constructor() {
    super();
    this.state = {
      dataBalance: [
        {
          title: 'Saldo de trocos',
          value: '109,00',
          month: 'AGO',
        },
        {
          title: 'Saldo de pagamentos',
          value: '5011,40',
          month: 'AGO',
        },
        {
          title: 'Saldo Investido',
          value: '19.213,00',
          month: 'AGO',
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.20)', flex: 1, padding: 10 }}>

        {this.state.dataBalance.map((balanco, i) => (
          <BalanceCard
            key={`payment_${i}`}
            title={balanco.title}
            month={balanco.month}
            value={balanco.value}
          />
        ))}

      </ScrollView>
    );
  }
}

export default BalanceTab;
