// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfF_f4K0Uw-Y4qyfFQcOjyP7ZkEfZSmDU",
  authDomain: "reactform-8cde2.firebaseapp.com",
  projectId: "reactform-8cde2",
  storageBucket: "reactform-8cde2.appspot.com",
  messagingSenderId: "257395513071",
  appId: "1:257395513071:web:6be27b801f613b7860ed1a",
  measurementId: "G-7C1Z6WR2DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);