import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4-ehzCMt38CSSYFRno1lzUKA7ttePy00",
  authDomain: "planify-web.firebaseapp.com",
  projectId: "planify-web",
  storageBucket: "planify-web.appspot.com",
  messagingSenderId: "797283335493",
  appId: "1:797283335493:web:74b680932c6db2bc3bd22c",
  measurementId: "G-KVWG53WBMF",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
