/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { AsyncStorage } from 'react-native';
import { ErrorMessages, Firebase, FirebaseRef } from '@constants/';
import * as RecipeActions from '../recipes/actions';

/*  Insert sellInformation in database */
function saveSellToStorage(newSell) {
  FirebaseRef.child('available_sells').push(newSell);
  return true;
}

export const startSell = value => (
  {
    type: 'SELL_STARTED',
    payload: value,
  }
);

export const saveCashflyCode = code => (
  {
    type: 'SELL_CODE_GENERATED',
    payload: code,
  }
);

export const publishSell = (newSell) => {
  saveSellToStorage(newSell);
  return ({ type: 'SELL_PUBLISHED' });
};

