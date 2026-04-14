import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdHxPlPULLRrSVSXPOsAJPwGeXWRSxOcc",
  authDomain: "devis-kitchen.firebaseapp.com",
  projectId: "devis-kitchen",
  storageBucket: "devis-kitchen.firebasestorage.app",
  messagingSenderId: "952073080441",
  appId: "1:952073080441:web:368590e43f533499368ea8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
