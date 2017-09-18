import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import { WalletCard } from '@ui/';

class PaybackTab extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          title: 'WM',
          name: 'WauMart',
          transactionType: 'Troco Enviado',
          value: '9,51',
          date: '11 SET',
          timeAgo: '5 dias atrás',

        },
        {
          title: 'CL',
          name: 'Cadu lanches',
          transactionType: 'Troco Enviado',
          value: '1,48',
          date: '12 MAR',
          timeAgo: '11h atrás',

        },
        {
          title: 'TX',
          name: 'merceraria do tio xico',
          transactionType: 'Troco Enviado',
          value: '9,51',
          date: '11 SET',
          timeAgo: '5dias atrás',
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.10)', flex: 1 }}>

        {this.state.data.map((troco, i) => (
          <WalletCard
            key={`payback_${i}`}
            title={troco.title}
            transactionType={troco.transactionType}
            name={troco.name}
            value={troco.value}
            date={troco.date}
            timeAgo={troco.timeAgo}
          />
        )
        )}

      </ScrollView>
    );
  }
}

export default PaybackTab;
