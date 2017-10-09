
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

export const closeModal = () => ({ type: 'CLOSE_MODAL' });

export const getSellStatus = (pin) => {
  if (Firebase === null) return () => new Promise(resolve => resolve());
  const nPin = Number(pin);
  const ref = FirebaseRef.child('available_sells').orderByChild('cashflyCode').equalTo(nPin);
  return (dispatch) => {
    return ref.on('child_changed',
      (snap) => {
        const currentSellval = snap.val();
        const currentSellRef = snap.ref;
        const currentSellKey = snap.key;
        dispatch({ type: 'GET_SELL_UPDATE_SUCCESS' });
        if (currentSellval.status === 'PAYMENT_SUCCESS') {
          const payload = {};
          console.log('currentREF', currentSellRef);
          payload['available_sells/' + currentSellKey + '/status'] = 'PAYMENT_CONFIRMED';
          FirebaseRef.update(payload);
          dispatch({ type: 'PAID_STATUS_SUCCESS', payload: 'PAYMENT_SUCCESS' });
        }
      },
    );
    // .then(
    //   (snap) => {
    //     const sell = snap.val();
    //     dispatch({ type: 'SELL_UPDATED_SUCCESS', payload: sell });
    //   },
    //   (error) => {
    //     dispatch({ type: 'GET_SELL_FAILURE', payload: error });
    //   },
    // );
  };
};

