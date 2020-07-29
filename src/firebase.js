import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD8OhTPvZbl0kVrR2eHoMWSnTpMCvxISRA",
  authDomain: "tinder-clone-84449.firebaseapp.com",
  databaseURL: "https://tinder-clone-84449.firebaseio.com",
  projectId: "tinder-clone-84449",
  storageBucket: "tinder-clone-84449.appspot.com",
  messagingSenderId: "654201593336",
  appId: "1:654201593336:web:c38cdf869f065b2b8f4a0d",
  measurementId: "G-RJJW3VZ3SC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
