import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPbdMTimu_FKW4EzYLHxz9wCSzGfzTbt8',
  authDomain: 'pm-cadaplan.firebaseapp.com',
  databaseURL: 'https://pm-cadaplan.firebaseio.com',
  projectId: 'pm-cadaplan',
  storageBucket: 'pm-cadaplan.appspot.com',
  messagingSenderId: '913861425795',
  appId: '1:913861425795:web:b443f909a34eb876cc79b6',
  measurementId: 'G-6T5NSLK4K3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
