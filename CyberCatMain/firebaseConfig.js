// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQRlobpR7Ej-nE7FST8mrxFWsc8sinrCI",
  authDomain: "cybercatcafe-37903.firebaseapp.com",
  projectId: "cybercatcafe-37903",
  storageBucket: "cybercatcafe-37903.firebasestorage.app",
  messagingSenderId: "583399342348",
  appId: "1:583399342348:web:1ce0209e52afdd9584c929",
  measurementId: "G-TZKCW7LGQZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);