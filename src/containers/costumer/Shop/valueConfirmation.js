import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  Alert,
  Text,
  ActivityIndicator,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
  Modal
} from 'react-native';
import { Spacer } from '@ui/';
import { Actions } from 'react-native-router-flux';
import { AppColors, AppSizes } from '@theme/';


const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
  },
  shopImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  h1: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  onBoardingText: {
    textAlign: 'center',
  },
});

const renderLoading = () => {
  setTimeout(() => Actions.cashflyCode(), 1500);
  return (
    <View>
      <ActivityIndicator size={'small'} />
      <Spacer size={10} />
      <Text style={{ color: 'darkgray', alignSelf: 'center' }}> Parendando com o vendedor </Text>
    </View>
  );
};

let isLoading = false;

const ValueConfirmation = ({ nextStep, prevStep, value, modalVisible, setModalVisible }) => (

  <View style={[{ backgroundColor: '#fff', flex: 1, flexDirection: 'column' }]}>

    <Modal
      transparent
      animationType="fade"
      presentationStyle={'pageSheet'}
      visible={modalVisible}
      onRequestClose={() => { }}
    >
      <TouchableOpacity
        style={{ backgroundColor: 'rgba(0,0,0, 0.7)', justifyContent: 'center', flex: 1 }}
        activeOpacity={1}
        onPressOut={() => setModalVisible(false)}
      >
        <View style={{ zIndex: 7, marginTop: 22, width: 300, alignSelf: 'center', borderWidth: 1.5, borderColor: '#8b8b8b' }}>
          <View style={{ backgroundColor: 'gray', width: 297, height: 150, alignItems: 'center', paddingBottom: 10, justifyContent: 'flex-end' }} >
            <Image source={require('../../../images/green-ok.png')} style={{ marginBottom: 20, width: 50, height: 50 }} />
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}> CPF na Nota? </Text>
          </View>
          <View style={{ backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 20 }}>
            <View >
              <Text style={{ color: '#797979', fontWeight: '500' }}> Verifique com seu cliente se é necessário adicionar CPF na nota. </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 30 }}>
              <Button style={{ marginRight: 20 }} title={'ADICIONAR'} onPress={() => { setModalVisible(false); nextStep(); }} color={'rgba(0, 0, 0, 0.86)'} />
              <Button style={{ marginRight: 20 }} title={'CANCELAR'} onPress={() => { setModalVisible(false); isLoading = true; }} color={'rgba(0, 0, 0, 0.86)'} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>

    <View style={{ flexGrow: 11, paddingTop: 40, justifyContent: 'space-between', flexDirection: 'column' }}>

      <Text style={{ paddingLeft: 15 }}>Valor da venda:</Text>

      <View>
        <Text style={{ fontWeight: '500', fontSize: 40, alignSelf: 'center' }}>{value} </Text>

        <Spacer size={30} />

        {!!isLoading && renderLoading()}
      </View>

      <View style={{ borderTopColor: 'lightgray', borderTopWidth: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => prevStep()} >
          <View style={{ marginVertical: 15, marginHorizontal: 30 }}>
            <Text style={{ color: '#4c4c4c', fontWeight: '700' }}>EDITAR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.wallet()} >
          <View style={{ marginVertical: 15, marginHorizontal: 30 }}>
            <Text style={{ color: '#4c4c4c', fontWeight: '700' }}>CANCELAR</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity onPress={() => setModalVisible(true)} >
      <View style={{ flexGrow: 1.5, height: 50, backgroundColor: AppColors.brand.accent, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: '500' }}> PROSSEGUIR </Text>
      </View>
    </TouchableOpacity>

  </View>
);

export default ValueConfirmation;
