// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8bhngGdYue7pj_UP8xDbFkxnSpXPG7ks",
  authDomain: "pushnotifications-c61b5.firebaseapp.com",
  projectId: "pushnotifications-c61b5",
  storageBucket: "pushnotifications-c61b5.firebasestorage.app",
  messagingSenderId: "739449927183",
  appId: "1:739449927183:web:289714b821447f9c19957a",
  measurementId: "G-NRRTMQMW6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);