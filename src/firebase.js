import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDDFkaCVMK_A4tpLzmjjduUQZBLn4st-p8",
  authDomain: "stockmate-10409.firebaseapp.com",
  projectId: "stockmate-10409",
  storageBucket: "stockmate-10409.appspot.com",
  messagingSenderId: "631162802353",
  appId: "1:631162802353:web:69c9b38c80d7adac789290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);