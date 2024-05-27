// firebase config file
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-a6b87.firebaseapp.com",
  projectId: "reactchat-a6b87",
  storageBucket: "reactchat-a6b87.appspot.com",
  messagingSenderId: "334710623633",
  appId: "1:334710623633:web:69e2fd73d68e8399289e30",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
