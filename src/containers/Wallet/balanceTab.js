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
          title: 'Trocos Enviados',
          value: '1693,00',
          month: 'AGO',
          imageURL: 'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835707/cashfly-saldo-troco-enviado-ilust_mk5z1w.jpg',
        },
        {
          title: 'Pagamentos Recebidos',
          value: '522011,40',
          month: 'AGO',
          imageURL: 'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835709/cashfly-saldo-de-pagamentos-ilust_omwjco.jpg',
        },
        {
          title: 'Saldo Investido',
          value: '19.213,00',
          month: 'AGO',
          imageURL: 'https://res.cloudinary.com/dfbcc7qin/image/upload/v1505835709/cashfly-saldo-de-investimento-ilust_gglavp.jpg',
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
            imageURL={balanco.imageURL}
          />
        ))}

      </ScrollView>
    );
  }
}

export default BalanceTab;
