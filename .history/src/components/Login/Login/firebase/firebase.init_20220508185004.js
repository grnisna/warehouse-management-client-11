// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPozINcA0fiPH9yC6eLYMxX5odWOVgeAY",
  authDomain: "eletronics-warehouse-70.firebaseapp.com",
  projectId: "eletronics-warehouse-70",
  storageBucket: "eletronics-warehouse-70.appspot.com",
  messagingSenderId: "1070889881055",
  appId: "1:1070889881055:web:386e857f8aa9255c5f886a",
  measurementId: "G-J0FSGFR5WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;