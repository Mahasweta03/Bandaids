// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXEqJb7pPWBRXz7HX8PAwSPj5WE08HeqA",
  authDomain: "bandaids-267fb.firebaseapp.com",
  projectId: "bandaids-267fb",
  storageBucket: "bandaids-267fb.appspot.com",
  messagingSenderId: "1048843936349",
  appId: "1:1048843936349:web:bf6331c5ca9cd25cec63b4",
  measurementId: "G-KLEHM3LD6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();
export {auth, provider, facebookprovider};

