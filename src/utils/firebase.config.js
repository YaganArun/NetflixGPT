// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd64YHTW4I0LaN2guEiU9IWlW3XwTC8wU",
  authDomain: "netflix-e117a.firebaseapp.com",
  projectId: "netflix-e117a",
  storageBucket: "netflix-e117a.appspot.com",
  messagingSenderId: "317282400044",
  appId: "1:317282400044:web:897d9a68735020a191de89",
  measurementId: "G-XBM2DQH1M3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
