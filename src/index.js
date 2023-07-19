import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { getFirestore } from 'firebase/firestore/lite';

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCadW2lKoHdx_iM9QBH8Wfi2IDFrPFxPHg",
   authDomain: "cart-b06a1.firebaseapp.com",
   projectId: "cart-b06a1",
   storageBucket: "cart-b06a1.appspot.com",
   messagingSenderId: "658947072510",
   appId: "1:658947072510:web:f50f0b6f6686808b1c60af"
 };

 // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export default db;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

