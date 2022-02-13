// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtg8F-NwsZ-HctuSO_gAJhO0IX864OG-g",
  authDomain: "fir-auth-e2eb1.firebaseapp.com",
  projectId: "fir-auth-e2eb1",
  storageBucket: "fir-auth-e2eb1.appspot.com",
  messagingSenderId: "646441174460",
  appId: "1:646441174460:web:3bc13928c7e631b42617b9",
  measurementId: "G-90419DTGVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);