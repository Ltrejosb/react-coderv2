import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcD9HtHmzVvkEwu9Fte3re8Ji7aKimwoE",
  authDomain: "data-fixbike.firebaseapp.com",
  projectId: "data-fixbike",
  storageBucket: "data-fixbike.appspot.com",
  messagingSenderId: "367955108471",
  appId: "1:367955108471:web:28091da02b62ece7a45c72",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
