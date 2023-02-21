import {initializeApp} from "firebase/app";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore";
import {getAuth, connectAuthEmulator} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyCa5cC4Tm49wU6mMGgdNvwIgmwkhf5qjBI",
  authDomain: "playground-6e056.firebaseapp.com",
  projectId: "playground-6e056",
  storageBucket: "playground-6e056.appspot.com",
  messagingSenderId: "893595449836",
  appId: "1:893595449836:web:e8a70f4572c4aff2d928c9"
})

const db = getFirestore(app);
connectFirestoreEmulator(db, "127.0.0.1", 8080)
const auth = getAuth(app);
connectAuthEmulator(auth, "127.0.0.1:9099")