
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDEyR4QG5PQ1vC_yf4PvO_YpYFr_i9G7m0",
  authDomain: "react-cursos-e3966.firebaseapp.com",
  projectId: "react-cursos-e3966",
  storageBucket: "react-cursos-e3966.appspot.com",
  messagingSenderId: "75074024207",
  appId: "1:75074024207:web:3f9dae84138425dadf047a"
};

export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);