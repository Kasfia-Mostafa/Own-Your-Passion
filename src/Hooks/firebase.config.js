// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCspsNMfLpZVW1hx2UCqgE8FGm42kbPReo",
  authDomain: "own-your-passion.firebaseapp.com",
  projectId: "own-your-passion",
  storageBucket: "own-your-passion.appspot.com",
  messagingSenderId: "1021304157293",
  appId: "1:1021304157293:web:a4e9e5d3106c4f543d7b64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;