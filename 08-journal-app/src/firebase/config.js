
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";

const env = getEnvironments();
console.log(env);

// const firebaseConfig = {
//   apiKey: "AIzaSyDEyR4QG5PQ1vC_yf4PvO_YpYFr_i9G7m0",
//   authDomain: "react-cursos-e3966.firebaseapp.com",
//   projectId: "react-cursos-e3966",
//   storageBucket: "react-cursos-e3966.appspot.com",
//   messagingSenderId: "75074024207",
//   appId: "1:75074024207:web:3f9dae84138425dadf047a"
// };

const firebaseConfigTesting = {
  apiKey: "AIzaSyDfs-CxK-4pBpz2kOW-nykEC8XSF6NWt6w",
  authDomain: "react-cursos-pruebas-30beb.firebaseapp.com",
  projectId: "react-cursos-pruebas-30beb",
  storageBucket: "react-cursos-pruebas-30beb.appspot.com",
  messagingSenderId: "600762339230",
  appId: "1:600762339230:web:af15d86915030051f4508f",
  measurementId: "G-Z1VQZXY48C"
};


export const FirebaseApp  = initializeApp(firebaseConfigTesting);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);