import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGNXbQ09ZOxplRlQvdSCDyHPxHyeAj1L4",
    authDomain: "typing-website-1ccd9.firebaseapp.com",
    projectId: "typing-website-1ccd9",
    storageBucket: "typing-website-1ccd9.appspot.com",
    messagingSenderId: "745111527471",
    appId: "1:745111527471:web:2b01f71667fc0be0efe6da",
    measurementId: "G-02CHJLL849"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebaseApp.firestore();

  export {auth, db}