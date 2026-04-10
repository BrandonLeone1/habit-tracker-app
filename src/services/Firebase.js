// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBIWPZOXHaqAOgEo61-R13SGN7wZ5pJ3M",
  authDomain: "my-habit-tracker-40774.firebaseapp.com",
  projectId: "my-habit-tracker-40774",
  storageBucket: "my-habit-tracker-40774.firebasestorage.app",
  messagingSenderId: "161628701797",
  appId: "1:161628701797:web:5d8da32e0f05d7283a728c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export const db = getFirestore(app)