// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC3Vb71CrMuCELNMaeTRoWvNeAXF2CTWk8",
//   authDomain: "fitrack2-31b3f.firebaseapp.com",
//   projectId: "fitrack2-31b3f",
//   storageBucket: "fitrack2-31b3f.appspot.com",
//   messagingSenderId: "792633377969",
//   appId: "1:792633377969:web:de586dd4e99ee89d57ce90"
// };

// // Initialize Firebase
// export const firebase_app = initializeApp(firebaseConfig);
// export const firebase_auth = getAuth(firebase_app);


import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your existing Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Vb71CrMuCELNMaeTRoWvNeAXF2CTWk8",
  authDomain: "fitrack2-31b3f.firebaseapp.com",
  projectId: "fitrack2-31b3f",
  storageBucket: "fitrack2-31b3f.appspot.com",
  messagingSenderId: "792633377969",
  appId: "1:792633377969:web:de586dd4e99ee89d57ce90"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);

// Initialize Auth with persistent storage
export const firebase_auth = initializeAuth(firebase_app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});