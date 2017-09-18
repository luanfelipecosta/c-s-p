import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import { WalletCard } from '@ui/';
import WalletPlaceholder from '@components/general/WalletPlaceholder';

class PaymentTab extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    if (this.state.data.length > 0) {
      return (
        <ScrollView style={{ backgroundColor: 'rgba(0, 0, 0, 0.10)', flex: 1 }}>
          {this.state.data.map((troco, i) => (
            <WalletCard
              key={`wallet-card_${i}`}
              title={troco.title}
              transactionType={troco.transactionType}
              name={troco.name}
              value={troco.value}
              date={troco.date}
              timeAgo={troco.timeAgo}
            />
          ),
          )}
        </ScrollView>
      );
    }
    return (
      <WalletPlaceholder />
    );
  }
}

export default PaymentTab;
