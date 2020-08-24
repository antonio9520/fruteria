import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyB5sg3Ut4qSEiklBnRNyQcAdYrjfi_FXuI',
  authDomain: 'appme-c54b8.firebaseapp.com',
  databaseURL: 'https://appme-c54b8.firebaseio.com',
  projectId: 'appme-c54b8',
  storageBucket: 'appme-c54b8.appspot.com',
  messagingSenderId: '490310684629',
  appId: '1:490310684629:web:10a4f448ab17fc5d34b75c',
  measurementId: 'G-K0K8NQWT0K',
};

export default firebase.initializeApp(firebaseConfig);
