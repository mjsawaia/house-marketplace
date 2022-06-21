import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_nKxtousGuEScBeOvhuQD8h3WCuL_ylg",
  authDomain: "house-marketplace-app-caba4.firebaseapp.com",
  projectId: "house-marketplace-app-caba4",
  storageBucket: "house-marketplace-app-caba4.appspot.com",
  messagingSenderId: "780230694188",
  appId: "1:780230694188:web:57904653e8f91402d7c889",
  measurementId: "G-41M3SRE87E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
