// src/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBynhVi5lVwenxb05pmvTuvJ_SaWgeYHo",
  authDomain: "easysarkari-1a9db.firebaseapp.com",
  projectId: "easysarkari-1a9db",
  storageBucket: "easysarkari-1a9db.appspot.com",
  messagingSenderId: "538387118991",
  appId: "1:538387118991:web:afd2e7ad6ebc75146b5c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };





