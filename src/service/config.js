// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cgmusica-87c6f.firebaseapp.com",
  projectId: "cgmusica-87c6f",
  storageBucket: "cgmusica-87c6f.appspot.com",
  messagingSenderId: "561841804425",
  appId: "1:561841804425:web:79aca747a0093e450f6258",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
