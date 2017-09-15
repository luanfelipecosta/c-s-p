/**
 * Firebase Reference/Init
 */
import * as Firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv';
// const config = {
//   API_KEY: 'AIzaSyC3LyLp4FCl8oyZAJmRrySSBB12raCv0-c',
//   AUTH_DOMAIN: 'cashfly-f6aff.firebaseapp.com',
//   DATABASE_URL: 'https://cashfly-f6aff.firebaseio.com',
//   PROJECT_ID: 'cashfly-f6aff',
//   STORAGE_BUCKET: 'cashfly-f6aff.appspot.com',
//   MESSAGING_SENDER_ID: '679083363399',
// };
let firebaseInitialized = false;

if (
  API_KEY !== 'null' &&
  AUTH_DOMAIN !== 'null' &&
  DATABASE_URL !== 'null' &&
  STORAGE_BUCKET !== 'null' &&
  MESSAGING_SENDER_ID !== 'null'
) {
  Firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized ? Firebase.database().ref() : null;
export default firebaseInitialized ? Firebase : null;
