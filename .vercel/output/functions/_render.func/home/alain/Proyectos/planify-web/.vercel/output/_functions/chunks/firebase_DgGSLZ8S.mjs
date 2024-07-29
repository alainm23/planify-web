import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4-ehzCMt38CSSYFRno1lzUKA7ttePy00",
  authDomain: "planify-web.firebaseapp.com",
  projectId: "planify-web",
  storageBucket: "planify-web.appspot.com",
  messagingSenderId: "797283335493",
  appId: "1:797283335493:web:74b680932c6db2bc3bd22c",
  measurementId: "G-KVWG53WBMF"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth as a, app as b, db as d };
