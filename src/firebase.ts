// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Kv479VL2trUDhbOy2oQK0Xa4DO3Jmwc",
  authDomain: "facebook-mini-4ea1e.firebaseapp.com",
  projectId: "facebook-mini-4ea1e",
  storageBucket: "facebook-mini-4ea1e.firebasestorage.app",
  messagingSenderId: "322480424411",
  appId: "1:322480424411:web:49998417bb991b545a13fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
