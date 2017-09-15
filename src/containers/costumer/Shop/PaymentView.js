/**
 * Payment Screen
 *

 */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ScrollView, TouchableOpacity, Dimensions, View, Button, Alert, Text, StyleSheet, Image, TouchableHighlight, Modal } from 'react-native';

import { Icon } from 'react-native-elements';

// Consts and Libs
import { AppStyles, AppSizes, AppFonts, AppColors } from '@theme/';

import { Actions } from 'react-native-router-flux';

// Components
import { Spacer } from '@ui/';


// Styles
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
  },
  priceBlock: {
    backgroundColor: '#0A0333',
    flexDirection: 'column',
    flexGrow: 6,
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
  shopDetailsTitle: {
    paddingVertical: 15,
    backgroundColor: AppColors.brand.primary,
    color: '#fff',
  },
  paymentDetailRow: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexGrow: 2,
    alignItems: 'center',
  },
  paymentDetailRowImage: {
    marginRight: 15,
  },
  paymentDetailWrapper: {
    flexDirection: 'column',
  },
  paymentDetailTitle: {
    color: '#000',
    fontSize: 16,
    marginBottom: 2,
  },
  paymentDetailInfo: {
    color: '#8B8B8B',
    fontSize: 16,
  },
  payButton: {
    width: AppSizes.screenWidth,
    backgroundColor: 'blue',
    height: 50,
    bottom: 0,
  },
  modalButton: {
    color: '#000',
    fontWeight: '900',
  },
});

/* Child Components ==================================================================== */

const PaymentDetailRow = ({ icon, type = 'material', title, info }) => (

  <View style={styles.paymentDetailRow} >
    <Icon style={styles.paymentDetailRowImage} size={40} name={icon} type={type} color={'#000'} />
    <View style={styles.paymentDetailWrapper} >
      <Text style={styles.paymentDetailTitle}> {title} </Text>
      <Text style={styles.paymentDetailInfo}> {info} </Text>
    </View>
  </View>
);

/* Component ==================================================================== */
class PaymentView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <Modal
          transparent
          animationType="fade"
          presentationStyle={'pageSheet'}
          visible={this.state.modalVisible}
          onRequestClose={() => { }}
        >
          <TouchableOpacity
            style={{ backgroundColor: 'rgba(0,0,0, 0.7)', justifyContent: 'center', flex: 1 }}
            activeOpacity={1}
            onPressOut={() => { this.setModalVisible(false); }}
          >
            <View style={{ marginTop: 22, width: 300, alignSelf: 'center', borderWidth: 1.5, borderColor: '#8b8b8b' }}>
              <View style={{ backgroundColor: 'gray', width: 297, height: 150, alignItems: 'center', paddingBottom: 10, justifyContent: 'flex-end' }} >
                <Image source={require('../../../images/green-ok.png')} style={{ marginBottom: 20, width: 50, height: 50 }} />
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Pagamento Realizado </Text>
              </View>
              <View style={{ backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 20 }}>
                <Text style={{ color: '#797979', fontWeight: '500' }}>Você pagou com CashFly, vá para Home ou Histórico consultar suas compras e extratos </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
                  <Button style={{ marginRight: 20 }} title={'CARTEIRA'} onPress={() => { this.setModalVisible(false); Actions.wallet(); }} color={'rgba(0, 0, 0, 0.86)'} />
                  <View style={{ width: 10, height: 10 }} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
        <View style={{ flex: 8 }}>
          <View style={styles.priceBlock} >
            <Text style={styles.priceTitle}> Valor da compra: </Text>
            <Text style={styles.billPrice}>R$ 100,00 </Text>
          </View>

          <View style={{ flexGrow: 7, flexDirection: 'column' }} />
          <Text style={{ paddingVertical: 15, paddingLeft: 15, color: '#fff', fontWeight: '700', backgroundColor: AppColors.brand.primary }}> Detalhes da compra </Text>
          <PaymentDetailRow icon={'wallet'} type={'material-community'} title={'Carteira'} info={'(**** 7665)'} />
          <PaymentDetailRow icon={'home'} title={'Nome do estabelecimento'} info={'email@estabelecimento.com'} />
        </View>

        <TouchableHighlight onPress={() => { this.setModalVisible(true); }} style={{ backgroundColor: AppColors.brand.accent, justifyContent: 'center', alignItems: 'center', height: 50, flex: 1 }} >
          <View >
            <Text style={{ fontWeight: '700' }}> PAGAR </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
//   render() {
//     return (
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
//         <Modal
//           transparent
//           animationType="fade"
//           presentationStyle={'pageSheet'}
//           visible={this.state.modalVisible}
//           onRequestClose={() => { }}
//         >
//           <TouchableOpacity
//             style={{ backgroundColor: 'rgba(0,0,0, 0.7)', justifyContent: 'center', flex: 1 }}
//             activeOpacity={1}
//             onPressOut={() => { this.setModalVisible(false); }}
//           >
//             <View style={{ marginTop: 22, width: 300, alignSelf: 'center', borderWidth: 1.5, borderColor: '#8b8b8b' }}>
//               <View style={{ backgroundColor: 'gray', width: 297, height: 150, alignItems: 'center', paddingBottom: 10, justifyContent: 'flex-end' }} >
//                 <Image source={require('../../../images/green-ok.png')} style={{ marginBottom: 20, width: 50, height: 50 }} />
//                 <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> Pagamento Realizado </Text>
//               </View>
//               <View style={{ backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 20 }}>
//                 <Text style={{ color: '#797979', fontWeight: '500' }}>Você pagou com CashFly, vá para Home ou Histórico consultar suas compras e extratos </Text>

//                 <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
//                   <Button style={{ marginRight: 20 }} title={'CARTEIRA'} onPress={() => { this.setModalVisible(false); Actions.wallet(); }} color={'rgba(0, 0, 0, 0.86)'} />
//                   <View style={{ width: 10, height: 10 }} />
//                 </View>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </Modal>

//         <View>
//           <View style={[styles.row, styles.priceBlock]} >
//             <Spacer size={10} />

//             <Text style={{ fontWeight: '500', color: '#fff' }}> Valor da compra:</Text>

//             <Text style={styles.billPrice}> R$ 122,00 </Text>

//           </View>

//           <Text style={[styles.row, styles.shopDetailsTitle]}> Detalhes da compra</Text>

//           <PaymentDetailRow title={'Carteira'} info={'(**** 7665)'} />
//           <PaymentDetailRow title={'Nome do estabelecimento'} info={'email@estabelecimento.com'} />
//           <TouchableHighlight style={{ marginTop: 5 }} onPress={() => { this.setModalVisible(true); }}>
//             <View style={[styles.payButton, { backgroundColor: AppColors.brand.accent, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: Dimensions.get('screen').width }]}>
//               <Text style={{ color: '#fff', fontWeight: '900' }}> PAGAR </Text>
//             </View>
//           </TouchableHighlight>

//         </View>
//       </View>
//     );
//   }
// }

// Loading.propTypes = {text: PropTypes.string, transparent: PropTypes.bool };
// Loading.defaultProps = {text: null, transparent: false };
// Loading.componentName = 'Loading';

/* Export Component ==================================================================== */
export default PaymentView;
