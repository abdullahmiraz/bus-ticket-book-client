// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmAK7Lfekwji3wEMnBA_5xcyGXonaaVlw",
  authDomain: "bus-ticketing-system-6290f.firebaseapp.com",
  projectId: "bus-ticketing-system-6290f",
  storageBucket: "bus-ticketing-system-6290f.firebasestorage.app",
  messagingSenderId: "784936081195",
  appId: "1:784936081195:web:4f40c7858beff7f348d76e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
