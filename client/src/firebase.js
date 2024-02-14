// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "mern-estate-59f34.firebaseapp.com",
  projectId: "mern-estate-59f34",
  storageBucket: "mern-estate-59f34.appspot.com",
  messagingSenderId: "682853745824",
  appId: "1:682853745824:web:c29025beb48aea23c9f5c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);