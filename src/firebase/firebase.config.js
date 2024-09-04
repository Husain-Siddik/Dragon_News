// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBucae6UV5V9eicx05QmaXBd9r2hfaP1MU",
  authDomain: "dragon-news-76eeb.firebaseapp.com",
  projectId: "dragon-news-76eeb",
  storageBucket: "dragon-news-76eeb.appspot.com",
  messagingSenderId: "830533123693",
  appId: "1:830533123693:web:ecf0f86f47f356cd978964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);

export  {auth,storage}