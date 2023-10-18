import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { HistoriaClinicaProvider } from './context/HistoriaClinicaProvider.jsx';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmfsA-G864MAh1Dfx-iDVQ_iAKqB-ZTjk",
  authDomain: "hc-hospital.firebaseapp.com",
  projectId: "hc-hospital",
  storageBucket: "hc-hospital.appspot.com",
  messagingSenderId: "222576358256",
  appId: "1:222576358256:web:85139acb8eef801d3b55b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HistoriaClinicaProvider>
    <App />
  </HistoriaClinicaProvider>
)
