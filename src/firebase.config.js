// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe6nAx62dsc_0PUxeX16IhhPcevLJMO6A",
  authDomain: "otpver-1eeec.firebaseapp.com",
  projectId: "otpver-1eeec",
  storageBucket: "otpver-1eeec.appspot.com",
  messagingSenderId: "330850494857",
  appId: "1:330850494857:web:3617ed57d271ea06535958",
  measurementId: "G-8B2752E4RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
