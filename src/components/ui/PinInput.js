/**
 * @flow
 * */
import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Immutable from 'immutable';

type P = {
  keyboardType?: string
}
type S = {

}
export default class PinInput extends Component<void, P, S> {
  pinItemStyle: any;
  onPinCompleted: Function;
  pinItemProps: {};

  constructor(props) {
    super(props);
    this.pinLength = this.props.pinLength || 4;
    this.state = {
      pins: Array.from((this.props.placeHolder || '_').repeat(this.pinLength)),
    };
    this.pinInputItems = new Array(this.pinLength);
  }

  onPinItemChanged(i, t) {
    this.setState({ pins: Immutable.List(this.state.pins).set(i, t).toArray() }, () => {
      if (i + 1 < this.pinLength) {
        this.refs[`pin_${i + 1}`].focus();
      } else {
        // end
        if (this.props.onPinCompleted) this.props.onPinCompleted(this.state.pins.join(''));
      }
    });
  }

  clearPinAndroid(i) {
    console.log(i);
    this.setState({ pins: Immutable.List(this.state.pins).set(i, '').toArray() });
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        {
          this.state.pins.map((v, i) => {
            const ind = i;
            return (
              <TextInput
                key={`pin_${i}`}
                ref={`pin_${i}`}
                autoFocus={i === 0}
                style={{
                  padding: 0,
                  margin: 2,
                  width: 30,
                  height: 30,
                  textAlign: 'center',
                  ...this.props.pinItemStyle,
                }}
                keyboardType={(this.props.pinItemProps || {}).keyboardType || 'default'}
                clearTextOnFocus
                maxLength={1}
                onChangeText={(t) => {
                  this.onPinItemChanged.call(this, i, t);
                }}
                onFocus={(indi) => { console.log('indice onFocus'); console.log(ind); this.clearPinAndroid.call(this, i); }}
                value={this.state.pins[i]}
              />
            );
          })
        }

      </View>
    );
  }
}
