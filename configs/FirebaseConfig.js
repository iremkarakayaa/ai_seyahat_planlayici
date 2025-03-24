// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHuhWn0wV507ljBbsYZ8DaYua8sfXRk3o",
  authDomain: "ai-seyahat-planlayici.firebaseapp.com",
  projectId: "ai-seyahat-planlayici",
  storageBucket: "ai-seyahat-planlayici.firebasestorage.app",
  messagingSenderId: "657605778368",
  appId: "1:657605778368:web:c9dbbeba188d19f8adc625",
  measurementId: "G-V3EK2LPRYX"};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
