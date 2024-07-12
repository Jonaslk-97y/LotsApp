import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDpBFVXi95zE26MvU5CH3qe1Kw0Gz9g0w",
  authDomain: "lots-app-17810.firebaseapp.com",
  projectId: "lots-app-17810",
  storageBucket: "lots-app-17810.appspot.com",
  messagingSenderId: "124825222072",
  appId: "1:124825222072:web:6e2dcf79e97ba3f79f2d4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
